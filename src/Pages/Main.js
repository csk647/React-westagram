import React, { Component } from "react";
import "./Main.css";
import Nav from "../Components/Nav.js";
import RightSide from "../Components/RightSide";
import Feed from "../Components/Feed.js";

class Main extends Component {
  render() {
    // state가 업데이트 되면 componentDid업데이트 + 렌더링 호출

    return (
      <div>
        <Nav />
        <div className="backgroundMainParent">
          <div className="backgroundMain">
            <div className="mainSection">
              <Feed />
            </div>

            {/* <!-- 두 번째 피드 끝 --> */}
            <div className="rightMain">
              <RightSide />
              {/* <!-- 위에꺼right main --> */}
            </div>
            {/* 이게 goRightside */}
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Main;
