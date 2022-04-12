
export const validationmsg = (userRegistration) => {
    let errors={};
    if(!userRegistration.firstname){
        errors.firstname="Full name is required";
    }
    if(!userRegistration.websiteurl){
        errors.nameofwebsite="Name of website is required";
    }
    if(!userRegistration.lastname){
        errors.lastname="Full Name is required";
    }
    if(!userRegistration.userid){
        errors.userid="User Id is required";   
    }
    if(!userRegistration.password){
        errors.password="Password is required";
        
    }else if(userRegistration.password.length < 6){
        errors.password="Password should be greater than 6 character";
        
    }
    if(userRegistration.password!==userRegistration.confirmpass){
        errors.confirmpass="Password does not match with confirm password";
    }
    if(!userRegistration.gender){
        errors.gender="Choose a gender";
    }
    if(!userRegistration.traffic){
        errors.traffic="Choose a type";
    }
    if(!userRegistration.emaiil){
        errors.emaiil="email is required";
    }else if(!/\S+@\S+\.\S+/.test(userRegistration.emaiil)){
        errors.emaiil="Give a valid email";
    }
    
    if(!userRegistration.contactnum){
        errors.contactnum="Contact number is required";
    }
    if(!userRegistration.file){
        errors.file="Please upload your file";
    }
    console.log(errors);
    return (errors);        
}

export default validationmsg;
