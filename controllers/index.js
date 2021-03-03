//controllers dépendeces
const services=require('../services/index');
//all controllers 
const user_controller=require(('./user'));
//function which crate a controllers object
//for map all the controllers
const controllers={
    user:user_controller(services)
}

//export our contollers object
module.exports=controllers;
