import React from "react";
import Login from "./Pages/Login";
import { Route } from "react-router-dom";
import Main from "./Pages/Main";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <Login /> 
      <Main />  */}
      {/* <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/Main">메인</Link>
        </li>
      </ul>
      <hr /> */}
      {/* hr은 왜쓰지? */}
      <Route path="/" component={Login} exact={true} />
      <Route path="/Main" component={Main} />
    </div>
  );
};

export default App;
