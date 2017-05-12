import contact from './contact.model'

function getContacts(req, res) {//get all the contacts
  contact.find({})//an empty object means to get all the added contacts
    .exec(function(err,result) {
      if(err)
        res.status(500).json(err);
      else
        res.status(200).json(result)
    })
}

function getContact(req, res) {//gets a single contact
  const contactId = req.params.id;//guardamos el id que viene directamente del request
  contact.findOne({//metodo para encontrar uno
    _id: contactId //en donde el id se iguala al id extraido
  }).exec(function (err, contact) {
    if(err)
      return res.status(500).send(err);
    if(!contact)
      return res.status(404).send('Contact Not Found');

    res.status(200).json(contact)
  })
}

function createContact(req, res) {
  const contactData = req.body;  //aqui obtiene los datos del request
  const contactAux = new contact(); //una instancia del modelo de BD

  //extraemos los datos
  contactAux.firstName = contactData.firstName;
  contactAux.lastName = contactData.lastName;
  contactAux.phoneNumber = contactData.phoneNumber;
  contactAux.city = contactData.city;
  contactAux.birthday = contactData.birthday;
  contactAux.email = contactData.email;

  //pasamos todos los datos del modelo al objeto contact
  contactAux.save()//guardamos los datos en la base
    .then(function(createdContact){//y entonces muestra el status
      res.status(200).json(createdContact)
    })
}

function updateContact(req, res) {
  const contactId = req.params.id;
  const newParams = req.body;

  contact.findOne({
    _id: contactId
  }).exec(function(err, contact){
    if(err)
      return res.status(500).send(err);
    if(!contact)
      return res.status(404).send('Pet Not Found');

    contact.firstName = newParams.firstName;
    contact.lastName = newParams.lastName;
    contact.phoneNumber = newParams.phoneNumber;
    contact.city = newParams.city;
    contact.birthday = newParams.birthday;
    contact.email = newParams.email;

    contact.save()
      .then(function(createdContact){
        res.status(200).json(createdContact)
      })
  })
}

function destroyContact(req, res){
  const contactId = req.params.id;
  contact.remove({//funcion para eliminar algo de la base de datos
    _id: contactId
  }).exec(function(err){
    if(err)
      return res.status(500).send(err);

    res.status(200).send('Contact removed');
  })
}

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  destroyContact,
};

