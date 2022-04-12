import React, { useState } from 'react'
import "./topbar.css"
// import { LaptopWindows, NotificationsNone, OutlinedFlagOutlined, PersonAdd, SettingsInputAntennaTwoTone } from '@material-ui/icons';
import {NotificationsNone, PersonAdd} from '@material-ui/icons';

// import {useHistory} from 'react-router-dom';

// import { NotificationsNone, Language, Settings, AccountBox, PersonAdd } from '@material-ui/icons';

import { Link } from 'react-router-dom';
import profile from '../../images/profile pic.jpg'
import Status from '../status/Status'

export default function Topbar() {
    const  [userid,setuserid ]=useState();
    function onLogin(){
        const userid = localStorage.getItem('userid')
        if(userid){
            setuserid(userid,userid)
        }  
        return (userid);
    };
    function handleLogout()  {
        setuserid();
        localStorage.clear();
      };
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">System Website</span>
                    <Status />
                </div>
                <div className="topRight">
                    <Link to="/newUser" className="link">
                        <div className="topbarIconContainer">
                            <PersonAdd style={{ color: "green"}} />
                            <span className="register"> Host Registration</span>
                        </div>
                    </Link>
                    <Link to="/websiteregister" className="link">
                        <div className="topbarIconContainer">
                            <PersonAdd style={{ color: "green" }} />
                            <span className="register">Website Registration</span>
                        </div>
                    </Link>
                        <div className="topbarIconContainer">
                            <PersonAdd style={{ color:"green"}} />
                            {userid ?  (   <Link to="/home" className="link" >
        <span className="register" onClick={handleLogout}>Logout</span>
        </Link>
        ):
        (
            <Link to="/login" className="link" >
            <span className="register" onClick={onLogin()}>Login</span>
        </Link>  

        )}
                        </div>
                    
                    <div>Welcome {userid}</div>
                    <Link to="/notifications" className="link">
                        <div className="topbarIconContainer">
                            <NotificationsNone />
                            <span className="topIconBadge">2</span>
                        </div>
                    </Link>
                    <Link to="/profile" className="link">
                        <div className="topbarIconContainer">
                            <img src={profile} alt="" className="userProfilePic" />
                            {/* <span className="login">Login</span> */}
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}
