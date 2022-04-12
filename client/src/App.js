import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser"
import Login from "./pages/login/Login"
import Registra from "./pages/websiteregister/Websiteregister"

import Profile from "./pages/profile/Profile"

function App() {
  return (
    <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home  />
            </Route>
            <Route path="/home">
              <Home  />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser/>
            </Route>
            <Route path="/logout">
              <Home/>
            </Route> 
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/websiteregister">
              <Registra/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
