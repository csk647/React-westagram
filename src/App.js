import React from "react";
import Login from "./Pages/Login";
import { Route } from "react-router-dom";
import Main from "./Pages/Main";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <Login /> */}
      <Route path="/" component={Login} exact={true} />
      <Route path="/Main" component={Main} />
    </div>
  );
};

export default App;
