import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import UserLog from "./Components/UserLog/UserLog";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
