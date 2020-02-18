import React, { Component } from "react";
import Logotext from "../Images/logo_text.png";
import Logo from "../Images/logo.png";
import Explore from "../Images/explore.png";
import Heart from "../Images/heart.png";
import Profile from "../Images/profile.png";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="inNav">
          <div className="navFirstLogo">
            <img src={Logo} alt="" className="instaMini" />
            <div className="betweenLogoDivLine"></div>
            <img src={Logotext} alt="" className="instaLogoString" />
          </div>

          <div className="searchPlusImg">
            <input type="search" placeholder="검색" className="navSearch" />
          </div>

          <div>
            <div className="navLastThreeIcon">
              <img src={Explore} alt="" className="icon1" />
              <img src={Heart} alt="" className="icon2" />
              <img src={Profile} alt="" className="icon3" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
