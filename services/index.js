//services dépendences
const repositories =require('../repositories/index'),
nodemailer=require('nodemailer');

//services
const user_service=require('./user'),
mailer_service=require('./mailer');

//create a services object for map
//all the services
const services={
user:user_service(repositories),
mailer:mailer_service(nodemailer)

}

//exports our services object
module.exports=services;