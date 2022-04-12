import validation from '../newUser/validation';
import validationmsg from '../newUser/validationmsg';
import "../newUser/newUser.css";
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useHistory} from 'react-router-dom';
// import fs from 'fs';
// import * as fs from 'fs'
// var fs= require('fs');


 export const Registra = () => {
    const [userRegistration, setUserRegistration] = useState({
        websiteurl: "",
        userid: "",
        password: "",
        emaiil: "",
        traffic: "",
        admin:false,
        file: "",
        confirmpass: "",
        contactnum: ""
    });
    const History= useHistory();
    let x = Math.floor((Math.random() * 1000) + 1);
    const [errors, setErrors] = useState({});
    let newError=(false);
    // const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        userRegistration.userid = "amps_client_" + userRegistration.websiteurl + x;
        setUserRegistration({ ...userRegistration, [name]: value });
    };

    const SubmitForm = async(e) => {
        e.preventDefault();
        setErrors(validationmsg(userRegistration));
        newError=validation(userRegistration);    
        // setUserRegistration({ firstname: "", gender:"", lastname: "", emaiil: "", userid: "", confirmpass: "", password: "", address: "", contactnum: "" });
        console.log(newError);
        console.log(userRegistration + 'undersubmitform');
        if (newError===(false)) {
            //posting data in server
            console.log(userRegistration);
            console.log(userRegistration.file);
            const filename=userRegistration.file.split("fakepath").pop();


            const forRegistraion = {
                websiteurl: userRegistration.websiteurl,
                userid: userRegistration.userid,
                password: userRegistration.password,
                emaiil: userRegistration.emaiil,
                traffic: userRegistration.traffic,
                admin:userRegistration.admin,
                confirmpass: userRegistration.confirmpass,
                contactnum: userRegistration.contactnum,
                file:filename,

            }
            
            // console.log(forRegistraion.websiteurl);
         
            axios.post('http://localhost:3001/websiteregister', forRegistraion)
                .then(function (response) {
                    // console.log('----------' + forRegistraion);
                    console.log(response);
                    if(response.data.status===1){
                        Swal.fire('Website Registration Successfull','Success','success') // if response is 1 that is successfull then display success message and redirect to home page
                        History.push('/');
                        
                    }
                    if(response.data.status===0){

                        alert("Error registering");
                    }
                })

                .catch(function (error) {
                    console.log(error);
                });   
        }
    };

   return (
                <div className="newUser">
                    <h1 className="title">
                       Website Registration Form
                    </h1>

                    <form className="newUserForm" onSubmit={SubmitForm} accept = 'files/*'action="/websiteregister" method="POST" encType="multipart/form-data">
                        <div className="newUserItem">
                            <label>Website URL</label>
                            <input type="text" value={userRegistration.websiteurl} onChange={handleInput} name="websiteurl" className="input" />
                            {errors.websiteurl && <p className="error">{errors.websiteurl}</p>}

                        </div>
                        <div className="newUserItem">
                            <label>Userid</label>
                            <input type="text" value={userRegistration.userid} onChange={handleInput} name="userid" className="input" autoComplete="off" />
                            {errors.userid && <p className="error">{errors.userid}</p>}
                        </div>

                       
                        <div className="newUserItem">
                            <label>Password</label>
                            <input type="password" value={userRegistration.password} onChange={handleInput} name="password" className="input" autoComplete="off" />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>

                        <div className="newUserItem">
                            <label>Confirm Password</label>
                            <input type="password" value={userRegistration.confirmpass} onChange={handleInput} name="confirmpass" className="input" autoComplete="off" />
                            {errors.confirmpass && <p className="error">{errors.confirmpass}</p>}
                        </div>

                        
                        <div className="newUserItem">
                            <label>Anticipated Traffic Flow</label>
                            <div className="custom_select">
                                <select value={userRegistration.traffic} onChange={handleInput} name="traffic">
                                    <option value="">Select</option>
                                    <option value="Light">Light</option>
                                    <option value="Heavy">Heavy</option>
                                </select>
                                {errors.traffic && <p className="error">{errors.traffic}</p>}
                            </div>
                        </div>

                        <div className="newUserItem">
                            <label>Email Address</label>
                            <input type="text" value={userRegistration.emaiil} onChange={handleInput} name="emaiil" className="input" autoComplete="off" />
                            {errors.emaiil && <p className="error">{errors.emaiil}</p>}
                        </div>
                        <div className="newUserItem">
                            <label>Contact Number</label>
                            <input type="text" value={userRegistration.contactnum} onChange={handleInput} name="contactnum" className="input" autoComplete="off" />
                            {errors.contactnum && <p className="error">{errors.contactnum}</p>}
                        </div> 

                        <div className="newUserItem">
                            <label>Insert a file:</label>
                            <input type="file" value={userRegistration.file} onChange={handleInput} name="file" className="input1"></input>
                            {errors.file && <p className="error">{errors.file}</p>}
                        </div>

                        <div className="newUserItem-agree">
                            <input type="checkbox" name="terms" value="terms" style={{marginRight: 5}} required />
                            <label htmlFor="terms">Agree to the terms and conditions.</label>
                        </div>
                        <div className="newUserItem">
                            <button className="newUserButton">Register</button>
                        </div>
                    
                
            </form>
        </div>
    )

}

export default Registra;