import "./profile.css";
import React , {Component} from 'react'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
// import { Link } from "react-router-dom";
import profile from "../../images/profile pic.jpg"

export default class Profile extends Component {
    constructor(props){        
        super(props)
        this.state={
            Loginuser:[],
            isLoading:false,
            isError:false
        }
        this.renderTableRows = this.renderuserdata.bind(this);
    }
    
    async componentDidMount() {
        this.setState({ isLoading: true })
        const response = await fetch('http://localhost:3001/register',{
          method:'get',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        console.log(response);
        if (response.ok) {
          const Loginuser = await response.json()
          this.setState({ Loginuser, isLoading: false })
        } else {
          this.setState({ isError: true, isLoading: false })
        }
      }
      renderuserdata = () => {
        const userid = localStorage.getItem("userid");
        const Loginuser =this.state.Loginuser
        return (Loginuser.map((user) => {
          return user.userid===userid ? (
            <div className="profile" key={profile.data}>
            <div className="profileTitleContainer">
                <h1 className="userTitle">Profile</h1>
            </div>
            <div className="profileContainer">
                <div className="profileShow">
                    <div className="profileShowTop">
                        <img src={profile} alt="" className="profileShowImg" />
                        <div className="profileShowTopTitle">
                            <span className="profileShowUsername">{user.firstname} {user.lastname}</span>
                            <span className="profileShowDevice">@{user.userid}</span>
                        </div>
                    </div>
                    <div className="profileShowBottom">
                        <span className="profileShowTitle">Account Details</span>
                        <div className="profileShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="profileShowInfoTitle">Rank:</span>
                            <span className="profileShowInfoNumber">5</span>
                        </div>
                        <div className="profileShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="profileShowInfoTitle">Reward Points:</span>
                            <span className="profileShowInfoNumber">250</span>
                            <button className="pointsDetail">Detail</button>
                        </div>
                        <div className="profileShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="profileShowInfoTitle">Active Hrs:</span>
                            <span className="profileShowInfoNumber">55</span>
                            <button className="pointsDetail">Detail</button>
                        </div>
                        <span className="profileShowTitle">Personal Info</span>
                        <div className="profileShowInfo">
                            <CalendarToday className="profileShowIcon" />
                            <span className="profileShowInfoTitle">10.12.1999</span>
                        </div>
                        <div className="profileShowInfo">
                            <PhoneAndroid className="profileShowIcon" />
                            <span className="profileShowInfoTitle">{user.contactnum}</span>
                        </div>
                        <div className="profileShowInfo">
                            {/* <PhoneAndroid className="profileShowIcon" /> */}
                            <span className="profileShowInfoTitle">{user.gender}</span>
                        </div>
                        <div className="profileShowInfo">
                            <MailOutline className="profileShowIcon" />
                            <span className="profileShowInfoTitle">{user.emaiil}</span>
                        </div>
                        <div className="profileShowInfo">
                            <LocationSearching className="profileShowIcon" />
                            <span className="profileShowInfoTitle">{user.address}</span>
                        </div>
                    </div>
                </div>
                <div className="profileUpdate">
                    <span className="profileUpdateTitle">Edit</span>
                    <form className="profileUpdateForm">
                        <div className="profileUpdateLeft">
                            <div className="profileUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="Username" className="profileUpdateInput" />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your name" className="profileUpdateInput" />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="Email" className="profileUpdateInput" />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="Contact Number" className="profileUpdateInput" />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Address" className="profileUpdateInput" />
                            </div>
                            <div className="profileUpdateItem">
                                <label>Gender</label>
                                <div className="profileUpdateGender" required>
                                    <input type="radio" name="gender" id="male" value="male" />
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" name="gender" id="female" value="female" />
                                    <label htmlFor="female">Female</label>
                                    <input type="radio" name="gender" id="other" value="other" />
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>
                        </div>
                        <div className="profileUpdateRight">
                            <div className="profileUpdateUpload">
                                <img src={profile} alt="" className="profileUpdateImg" />
                                <label><Publish className="profileUpdateIcon" /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="profileUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
          ):(
                  <div></div>
              
          )
        
        })
        )}
      render(){
          const {isLoading,isError}=this.state
          
          if (isLoading) {
            return <div>Loading...</div>
            }        
         if (isError) {
                return <div>Error</div>
            }
            return(
                <div key={profile.id}>{this.renderuserdata()}</div>
            )
      }
}


