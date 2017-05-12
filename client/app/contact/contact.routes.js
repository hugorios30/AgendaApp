'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('contacts:list', {
    url: '/contacts',
    template: '<list-contacts></list-contacts>'
  });

  $stateProvider.state('contacts:new', {
    url: '/contacts/new',
    template: '<detail-contact></detail-contact>'
  });

  $stateProvider.state('contacts:update', {
    url: '/contacts/:contactId',
    template: '<detail-contact></detail-contact>'
  });
}
