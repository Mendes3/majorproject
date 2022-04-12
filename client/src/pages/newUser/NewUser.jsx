import React, { useState} from 'react';
import validation from './validation.js';
import validationmsg from './validationmsg';
import axios from 'axios';
import "./newUser.css";
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2'

// import { getDataGridUtilityClass } from '@material-ui/data-grid';


export default function NewUser() {

    const [userRegistration, setUserRegistration] = useState({
        firstname: "",
        lastname: "",
        userid: "",
        password: "",
        emaiil: "",
        gender: "",
        device : "",
        admin : false,
        address: "",
        confirmpass: "",
        contactnum: "",
    });
    const [errors, setErrors] = useState({});
    const History= useHistory();
    let x = Math.floor((Math.random() * 1000) + 1);

   
    let newError=(false);
    // const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        userRegistration.userid = "amps_" + userRegistration.firstname + x;
        setUserRegistration({ ...userRegistration, [name]: value });
        console.log(userRegistration);
    };

    const SubmitForm = async(e) => {
        e.preventDefault();
        setErrors(validationmsg(userRegistration));
        newError=validation(userRegistration);    
        // setUserRegistration({ firstname: "", gender: "", lastname: "", emaiil: "", userid: "", confirmpass: "",device:"", password: "", email: "", address: "", contactnum: "" });
        console.log(newError);

        if (newError===(false)) {
            //posting data in server
            // console.log(userRegistration);
            const forRegistraion = {
                firstname   : userRegistration.firstname,
                lastname    : userRegistration.lastname,
                userid      : userRegistration.userid,
                password    : userRegistration.password,
                emaiil      : userRegistration.emaiil,
                gender      : userRegistration.gender,
                device      : userRegistration.device,
                admin       : userRegistration.admin,
                address     : userRegistration.address,
                confirmpass : userRegistration.confirmpass,
                contactnum  : userRegistration.contactnum
            }
            console.log('This is for registration----------')
            console.log(forRegistraion);
            axios.post('http://localhost:3001/register', forRegistraion,{
                credentials:'include',
                
            })
            .then(function (response) {
                if(response.data.status===1){
                    Swal.fire('Registartion Successfull','Success','success')
                    History.push('/login');
                    alert("Userid:"+userRegistration.userid)
                    console.log('Got the token',response.data.result);
                }
                if(response.data.status===0){
                    console.log(response.data.result);
                    alert(response.data.result);
                }
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                //console.log('I am error');

            });
            
        }
    };

   return (       
                <div className="newUser">
                <h1 className="title">Registration Form</h1>
                    <form className="newUserForm" onSubmit={SubmitForm}>
                    <div className="newUserItem">
                            <label>First Name</label>
                            <input type="text" value={userRegistration.firstname} onChange={handleInput} name="firstname" className="input" />
                            {errors.firstname && <p className="error">{errors.firstname}</p>}
                     </div>   
                        <div className="newUserItem">
                            <label>Last Name</label>
                            <input type="text" value={userRegistration.lastname} onChange={handleInput} name="lastname" className="input" />
                            {errors.lastname && <p className="error">{errors.lastname}</p>}
                        </div>
                         <div className="newUserItem">
                            <label>User Id</label>
                            <input type="text" value={userRegistration.userid} onChange={handleInput} name="userid" className="input" autoComplete="off" readOnly/>
                            
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
                            <label>Gender</label>
                            <div className="custom_select">
                                <select value={userRegistration.gender} onChange={handleInput} name="gender">
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="female">Others</option>
                                </select>
                                {errors.gender && <p className="error">{errors.gender}</p>}
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
                            <label>Device</label>
                            <div className="custom_select">
                                <select value={userRegistration.device} onChange={handleInput} name="device">
                                    <option value="">Select</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Mobile Phone">Mobile phone</option>
                                    <option value="Others">Others</option>
                                </select>
                                {errors.device && <p className="error">{errors.device}</p>}
                            </div>
                        </div>


                        <div className="newUserItem">
                            <label>Address</label>
                            <input value={userRegistration.address} onChange={handleInput} name="address" className="input"></input>
                            {errors.address && <p className="error">{errors.address}</p>}
                        </div>

                        <div className="newUserItem-agree">
                            <input type="checkbox" name="terms" value="terms" style={{marginRight: 5}} required />
                            <label htmlFor="terms">Agree to the terms and conditions.</label>
                        </div>
                        <div>
                            <button className="newUserButton">Register</button>
                        </div>
                        

                    </form> 
                </div>
            
        
    )

}

