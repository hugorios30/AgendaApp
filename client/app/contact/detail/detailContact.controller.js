import _ from 'lodash';
import ngmessage from 'angular-messages'
class DetailContactController {
  /*@ngInject*/
  constructor($http, $state, $stateParams) {
    this.$http = $http;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.isUpdate = false;
    this.contactId = this.$stateParams.contactId;
    this.contact = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      city: '',
      birthday: '',
      email: ''
    };

  }

  $onInit() {
    const { contactId } = this;
    if(contactId){
      this.isUpdate = true;
      this.$http.get(`/api/contacts/${contactId}`)
        .then((response) => {
        response.data.birthday = new Date(response.data.birthday);
          _.merge(this.contact, response.data)
        });
    }

  }

  updateContact(){
    const { contactId } = this;
    this.$http.put('/api/contacts/' + contactId, this.contact)
      .then((res) => {
        this.$state.go('contacts:list')
      })
  }

  saveContact(){
    if(this.isUpdate){
      this.updateContact();
    }else{
      this.createContact();
    }
  }

  createContact(){
    this.$http.post('/api/contacts',this.contact)
      .then((res) => {
        this.$state.go('contacts:list')
      })

  }

  submitForm(isValid){
    if(isValid){
      alert("This form is valid")
    }
  }

}//FIN DE LA CLASE CONTACTCONTROLLER

export default angular.module('AgendaApp.contacts:detail',[ngmessage])
  .component('detailContact', {
    template: require('./detailContact.html'),
    controller: DetailContactController
  }).name
