import "./sidebar.css"
import { Timeline, TrendingUp, PersonOutline, BarChart, Settings, LockOutlined, NotificationsActiveOutlined, WorkOutline, PeopleOutline, DynamicFeed, Info, Home } from '@material-ui/icons'
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/home" className="link">
                            <li className="sidebarListItem">
                                <Home className="sidebarIcon" />
                            Home
                            </li>
                        </Link>
                        <Link to="/analytics" className="link">
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        </Link>
                        <Link to="/units" className="link">
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon" />
                            Units
                        </li>
                        </Link>
                        <Link to="/notifications" className="link">
                            <li className="sidebarListItem">
                                <NotificationsActiveOutlined className="sidebarIcon" />
                            Notifications
                           <span className="sideIconBadge">2</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Account</h3>
                    <ul className="sidebarList">
                        <Link to="/profile" className="link">
                            <li className="sidebarListItem ">
                                <PersonOutline className="sidebarIcon" />
                            Profile
                        </li>
                        </Link>
                        <Link to="/report" className="link">
                            <li className="sidebarListItem">
                                <BarChart className="sidebarIcon" />
                            Report
                        </li>
                        </Link>
                        <Link to="/settings" className="link">
                            <li className="sidebarListItem">
                                <Settings className="sidebarIcon" />
                            Settings
                        </li>
                        </Link>
                        <Link to="/home" className="link">
                            <li className="sidebarListItem">
                                <LockOutlined className="sidebarIcon" />
                            LogOut
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Members</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PeopleOutline className="sidebarIcon" />
                            Users
                            </li>
                        </Link>
                        <Link to="/manage" className="link">
                            <li className="sidebarListItem">
                                <WorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        </Link>
                        <Link to="/feedback" className="link">
                            <li className="sidebarListItem">
                                <DynamicFeed className="sidebarIcon" />
                            Feedbacks
                        </li>
                        </Link>
                        <Link to="/aboutUs" className="link">
                            <li className="sidebarListItem">
                                <Info className="sidebarIcon" />
                            About Us
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>

    )
}
