import {Router} from 'express';//requerimos el router
import controller from './contact.controller' //el controlador

var router = new Router();

router.post('/', controller.createContact);
router.get('/', controller.getContacts);
router.get('/:id', controller.getContact);
router.put('/:id', controller.updateContact);
router.delete('/:id', controller.destroyContact);

module.exports = router;
