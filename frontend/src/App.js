import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import Register from "./Components/User/Register";

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
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
