import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/home" exact component={Main} />
      </Router>
    </div>
  );
}

export default App;
