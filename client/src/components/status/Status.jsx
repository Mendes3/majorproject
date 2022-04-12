import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import "./status.css"


export default function SwitchLabels() {
    const [active, setActive] = useState(true);
    const toggler = () => {
        active ? setActive(false) : setActive(true);
    };
    return (
        <div className="statusWrapper">
            <span className="statusTitle">Status</span>
            <Switch defaultChecked onClick={toggler} style={{ marginRight: 5 }} name="checkStatus" color="primary" />
            {
                active ? <span className="statusInfo">Active</span>
                    : <span className="statusInfo" >Inactive</span>
            }
        </div>
    );
}
