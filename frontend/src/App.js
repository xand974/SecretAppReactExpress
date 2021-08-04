import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import Profile from "./Components/Profile/Profile";
import Sidebar from "./Components/Main/Sidebar/Sidebar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./Components/UserLog/Login/Login";
import Register from "./Components/UserLog/Register/Register";
import { useCookies } from "react-cookie";

function App() {
  const { user } = useContext(AuthContext);
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  setCookie("userId", user?._id);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact>
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/" exact>
            {user ? (
              <>
                <Header />
                <Main />
              </>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/profile" exact>
            {user ? (
              <>
                {" "}
                <Header />
                <div className="profile">
                  <Sidebar />
                  <Profile userId={user._id} />
                </div>{" "}
              </>
            ) : (
              <Login />
            )}
          </Route>
          <Route exact path="/profile/:username">
            {user ? (
              <>
                <Header />
                <div className="profile">
                  <Sidebar />
                  <Profile />
                </div>
              </>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
