import React from "react";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Login /> */}
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/Main" component={Main} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
