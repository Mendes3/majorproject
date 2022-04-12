
export const validation = (userRegistration) => {
    
    let newError=(false);
       

//    if(!userRegistration.firstname && (!userRegistration.websiteurl || !userRegistration.lastname)){
//        newError=(true);
//    }
   
//    if(!userRegistration.lastname){
//        newError=(true);
//    }
   if(!userRegistration.userid){
       newError=(true);
   }
   if(!userRegistration.password){
       newError=(true);
   }else if(userRegistration.password.length < 6){
       newError=(true);
   }
   if(userRegistration.password!==userRegistration.confirmpass){
       newError=(true);
   }
//    if(!userRegistration.gender && !userRegistration.traffic){
//        newError=(true);
//    }
   if(!userRegistration.emaiil){
       newError=(true);
   }else if(!/\S+@\S+\.\S+/.test(userRegistration.emaiil)){
       newError=(true);
   }
   
   if(!userRegistration.contactnum && !userRegistration.file){
       newError=(true);
   }
   return (newError);        
}
export default validation;