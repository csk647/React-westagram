import React from "react";
// import { Route, Link } from "react-router-dom";
// import Main from "./Main";
// import React, { Component } from 'react';
import "./Login.css";
import Logotext from "../Images/logo_text.png";

function Login() {
  return (
    <div className="imBoss">
      <div className="largestBox">
        <div className="firstImg">
          <img src={Logotext} alt="logo text" />
        </div>
        <form className="firstMan">
          <div className="idBox1Parent">
            <input
              className="idBox1"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />

            <input className="idBox2" type="password" placeholder="비밀번호" />
            <input
              className="idBox3"
              id="special"
              type="button"
              value="로그인"
              disabled
            />

            {/* <Route path="/" component={Login} exact={true} />
            <Route path="/Main" component={Main} /> */}
          </div>
        </form>
        <div className="askPWMom">
          <span className="askPW">비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
