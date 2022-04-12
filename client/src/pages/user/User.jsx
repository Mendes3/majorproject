import "./user.css";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons';
// import { Link } from "react-router-dom";
import profile from "../../images/profile.jpg"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">User Details</h1>
            </div>
            <div className="userShow">
                <div className="userShowLeft">
                    <img src={profile} alt="" className="userShowImg" />
                </div>
                <div className="userShowRight">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userSubHeading">Full Name:</span>
                        <span className="userShowInfoTitle">Anna Becker</span>
                    </div>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userSubHeading">Username:</span>
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userSubHeading">Rank:</span>
                        <span className="userShowInfoTitle">5</span>
                    </div>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userSubHeading">Reward Points:</span>
                        <span className="userShowInfoTitle">250</span>
                        <button className="pointsDetail">Detail</button>
                    </div>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userSubHeading">Service Hrs:</span>
                        <span className="userShowInfoTitle">50</span>
                        <button className="pointsDetail">Detail</button>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon" />
                        <span className="userSubHeading">Device:</span>
                        <span className="userShowInfoTitle">Smartphone</span>
                    </div>
                    <div className="userShowTitle">Personal Info</div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon" />
                        <span className="userSubHeading">Date of Birth:</span>
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userSubHeading">Gender:</span>
                        <span className="userShowInfoTitle">Female</span>
                    </div>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon" />
                        <span className="userSubHeading">Phone:</span>
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon" />
                        <span className="userSubHeading">Email:</span>
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon" />
                        <span className="userSubHeading">Address:</span>
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                    <button className="userRemoveButton">Remove</button>
                </div>
            </div>
        </div>
    )
}
