import angular from 'angular';
import DeleteModalController from './deleteModal.controller'

class ListContactController{
  /*@ngInject*/
  constructor($http, $uibModal){
    this.$http = $http;
    this.$uibModal = $uibModal;
    this.listContacts = [];
    this.sortType = 'firstName';
    this.sortReverse =  false;
  }

  $onInit(){
    this.getContacts();
  }

  getContacts(){
    this.$http.get('/api/contacts')
      .then(response => {
        this.listContacts = response.data;
      });
  }

  deleteContact(contactId){
    this.$uibModal.open({
      template: require('./deleteModal.html'),
      controller: DeleteModalController,
      controllerAs: '$ctrl',
      resolve: {
        contactId:function () {
          return contactId;
        }
      }
    })
      .result.then((result) => {
      if(result){
        this.getContacts();
      }
    })
  }

}

export default angular.module('AgendaApp.contacts:list',[])
  .component('listContacts', {
    template: require('./listContacts.html'),
    controller: ListContactController
  }).name
