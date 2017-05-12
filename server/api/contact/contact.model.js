import mongoose, {Schema} from 'mongoose' //importamos la libreria de mongoose para usar mongoDB

var ContactSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  city: String,
  birthday: Date,
  email: String
});

export default mongoose.model('contact',ContactSchema);

/*
 * AQUI SE CREA EL MODELO DE BASE DE DATOS, CREANDO UN SCHEMA
 * Y PONIENDO SUS CAMPOS, PARA POSTERIORMENTE EXPORTARLO PARA SU USO
 * */



