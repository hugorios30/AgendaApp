import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listContacts from './list/listContacts.controller'
import detailContacts from './detail/detailContact.controller'
import routing from './contact.routes'

export default angular.module('AgendaApp.contacts', [uiRouter, listContacts,detailContacts])
  .config(routing)
  .name;
