import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import UserLog from "./Components/UserLog/UserLog";
import Profile from "./Components/Profile/Profile";
import Sidebar from "./Components/Main/Sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" exact>
            <Header />
            <Main />
          </Route>
          <Route path="/" exact>
            <UserLog />
          </Route>
          <Route path="/profile" exact>
            <Header />
            <div className="profile">
              <Sidebar />
              <Profile username="xand" />
            </div>
          </Route>
          <Route exact path={"/profile/:username"}>
            <Header />
            <div className="profile">
              <Sidebar />
              <Profile username="xand974" />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
