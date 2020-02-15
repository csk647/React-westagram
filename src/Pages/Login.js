import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
// import Main from "./Main";
// import React, { Component } from 'react';
import "./Login.css";
import Logotext from "../Images/logo_text.png";
// import { render } from "@testing-library/react";

class Login extends Component {
  constructor(props) {
    super();

    this.state = {
      id: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({ id: e.target.value });
  };
  handleChange2 = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    // alert(this.state.id + "&" + this.state.password);
    this.setState({ id: "" }, { password: "" });
    e.preventDefault();
  };

  render() {
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
                value={this.state.id}
                onChange={this.handleChange}
              />

              <input
                className="idBox2"
                type="password"
                placeholder="비밀번호"
                value={this.state.password}
                onChange={this.handleChange2}
              />
              <input
                // className="idBox3"
                className={`idBox3 ${
                  this.state.id.length !== 0 && this.state.password.length !== 0
                    ? "reactLoginButton"
                    : ""
                }`}
                id="special"
                type="button"
                value="로그인"
                disabled={!this.state.id && !this.state.password}
                onClick={this.handleSubmit}
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
}

export default Login;
