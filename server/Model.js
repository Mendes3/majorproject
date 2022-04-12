const mongoose = require('mongoose');

  var RegisterSchema = new mongoose.Schema({
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    userid: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    emaiil: {type:String, required:true},
    gender: {type:String, required:true},
    device: {type:String, required:true},
    admin: {type:String, required:true},
    address: {type:String, required:true},
    confirmpass: {type:String, required:true},
    contactnum: {type:String, required:true}
  });
 const User = mongoose.model('User', RegisterSchema,'users');
 

 var WebsiteSchema = new mongoose.Schema({
  nameofwebsite: {type:String, required:true,unique:true},
  nameofcompany: {type:String, required:true},
  userid: {type:String, required:true, unique:true},
  password: {type:String, required:true},
  emaiil: {type:String, required:true},
  servicerequired: {type:String, required:true},
  admin: {type:String, required:true},
  address: {type:String, required:true},
  address: {type:String, required:true},
  file: {type:file, required:true},
  confirmpass: {type:String, required:true},
  contactnum: {type:String, required:true}
});
const forwebsite = mongoose.model('forwebsite', WebsiteSchema,'websites');

  
  module.exports={User,forwebsite};


  

  