import React,{useState} from 'react'
import axios from 'axios';
import "./login.css";
import {useHistory} from 'react-router-dom';

export const Login = () => {
    const [userid,setuserid]=useState("");
    const [password,setPassword]=useState("");
    const [allEntry,setAllEntry]=useState([]);  
    const History= useHistory();
    
    const submitForm = (e) =>{
        e.preventDefault();
        const newEntry ={userid:userid, password:password};
        setAllEntry([...allEntry,newEntry]);
        setuserid('');
        setPassword('');
        axios.post('http://localhost:3001/Login', newEntry)
                .then(function (response) {
                    if(response.data.status===1){
                        console.log('Got the token',response.data.result)
                        localStorage.setItem('userid',userid ); 
                        History.push('/')
                    }
                    if(response.data.status===0){ 
                         alert("Userid and password doesnot match");
                     }
                })
                .catch(function (error) {
                    console.log("There is an error! " + error);
                });               
            }
    return (
        <>         
            <form action="auth" className="form" onSubmit={submitForm}>               
                <h1 className="title">Login Page</h1>
                <div className="newUserItem">
                <input type="text" placeholder= "User id"  
                value={userid}
                onChange={(e)=>setuserid(e.target.value)} autoComplete="off"/>
                </div>
                <div className="newUserItem">
                <input type="password" placeholder="Password"  
                value={password}
                onChange={(e)=>setPassword(e.target.value)}autoComplete="off"/>                      
                </div>
                <div className="pass">Forget Password?</div>
                <button className="newUserButton" type="Submit">Login</button>
                <div className="pass">
                    Not a memeber? <a href="./newUser/NewUser">Register</a>
                </div>
                </form>
                <div>
                    
                </div>

        </>
    )
}
export default Login

