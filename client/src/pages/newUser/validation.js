
export const validation = (userRegistration) => {
    
    let newError=(false);
       

   if(!userRegistration.firstname && !userRegistration.nameofwebsite){
       newError=(true);
   }
   
//    if(!userRegistration.lastname && !userRegistration.nameofcompany){
//        newError=(true);
//    }
//    if(!userRegistration.userid){
//        newError=(true);
//    }
//    if(!userRegistration.password){
//        newError=(true);
//    }else if(userRegistration.password.length < 6){
//        newError=(true);
//    }
//    if(userRegistration.password!==userRegistration.confirmpass){
//        newError=(true);
//    }
//    if(!userRegistration.gender && !userRegistration.servicerequired){
//        newError=(true);
//    }
//    if(!userRegistration.device && !userRegistration.typeofservice){
//        newError=(true);
//    }
//    if(!userRegistration.emaiil){
//        newError=(true);
//    }else if(!/\S+@\S+\.\S+/.test(userRegistration.emaiil)){
//        newError=(true);
//    }
   
//    if(!userRegistration.contactnum){
//        newError=(true);
//    }
   if(!userRegistration.file){
       newError=(true);
   }
   return (newError);        
}
export default validation;