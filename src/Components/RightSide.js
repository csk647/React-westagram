import React, { Component } from "react";

class RightSide extends Component {
  render() {
    return (
      <div className="goRightside">
        {/* <!-- 이거오른쪽 전체야 --> */}
        <div className="fixedMyProfileParent">
          <div className="fixedMyProfile">
            <img
              className="myProfilePhoto"
              alt=""
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/74978966_338542293616691_8712271736084627456_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=IYL57WDeYRwAX8eyjgg&oh=b882ce568477fbdd69f59d232bbdd2e9&oe=5ECE0DD2"
            />
            <div className="rightProfileMyId">
              <span className="myId">sunset_aeri</span>
              <p className="myOwnIntroduction">애리</p>
            </div>
          </div>

          <div className="seeAllStoryParent">
            {/* <!-- seeAllStoryParent를 안써도 되면 삭제하자 --> */}
            <div className="story_see_all">
              {/* <!-- 스토리랑 모두보기 한 줄 --> */}
              <div className="nameOfUserCanSeeStory">스토리</div>
              <div className="seeAllStory">모두 보기</div>
            </div>
            <div>
              {/* <!-- 스토리 볼 프로필이랑 이름 스크롤 가능 --> */}
              <div className="firstStory">
                <img
                  alt="hyun_aa_h_님의 프로필 사진"
                  className="firstStoryPhoto"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/81242950_788759761535497_5850508299178344448_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=UHTcc3wMyXwAX8Y5Ga2&amp;oh=c522affeb721ad5e58e2513ade9e121a&amp;oe=5ED4A47C"
                />
                <div className="firstStory_explain">
                  <div className="fistStoryId">hyun_aa_h_</div>
                  <div className="whenFistStoryUploaded">2분 전</div>
                </div>
              </div>
              <div className="secondStory">
                <img
                  alt="muziktiger님의 프로필 사진"
                  className="secondStoryPhoto"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/56478709_2262075257206470_1742240358202343424_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=h9Pe7Ml1jJQAX_3jNBe&amp;oh=7b1e2995e9ad3ef2bc76a3eca5d75684&amp;oe=5EC9A952"
                />
                <div className="secondStory_explain">
                  <div className="secondStoryId">muziktiger</div>
                  <div className="whenSecondStoryUploaded">3시간 전</div>
                </div>
              </div>
            </div>
          </div>

          <div className="recommendOtherUser">
            {/* <!-- 두 번째 박스 --> */}
            <div className="firstLineOfSeeAllRecommendationParent">
              <div className="firstLineOfSeeAllRecommendation">
                {/* <!-- 회원님을 위한 추천,모두보기  --> */}
                <div className="recommendationForYou">회원님을 위한 추천</div>
                <div className="seeAllRecommendation">모두 보기</div>
                {/* <!-- 이거 두개는 가로 정렬해야해 --> */}
              </div>
            </div>
            <div className="recommendUserContainer">
              <div className="firstRecommendUser">
                {/* <!-- 새로운 사람들 프로필, 팔로우 버튼 --> */}
                <img
                  className="firstRecommendUserPhoto"
                  alt=""
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/78993216_581418589288447_5049957800004812800_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=hTWUPyMspRAAX8hSnTk&amp;oh=48343fe700ae330149e4b2f4e954dfca&amp;oe=5ECEDB0B"
                />
                <div className="firstRecommendUserId_Plus_explain">
                  <div className="firstRecommendUserId">natgeo</div>
                  <div className="explainOfFirstRecommendUser">인기</div>
                </div>
                <button className="btnOfFallow">팔로우</button>
              </div>

              <div className="secondRecommendUser">
                <img
                  alt="gombung님의 프로필 사진"
                  className="secondRecommendUserPhoto"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/12547222_979725935408465_1091653727_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=aWKHHEQmtT0AX_ZADOV&amp;oh=4050536483716777f5047438c89d8998&amp;oe=5EC1AEB6"
                />
                <div className="secondRecommendUserId_Plus_explain">
                  <div className="secondRecommendUserId">siru</div>
                  <div className="explainOfSecondRecommendUser">
                    회원님을 팔로우합니다.
                  </div>
                </div>
                <button className="btnOfFallow">팔로우</button>
              </div>
            </div>
          </div>

          <div className="checkSomeInfoAboutInstagramParent">
            {/* <!-- 밑에 자잘한거 --> */}
            <li className="checkSomeInfoAboutInstagram"> Instagram 정보 · </li>

            <li className="checkSomeInfoAboutInstagram">도움말 · </li>
            <li className="checkSomeInfoAboutInstagram">홍보 센터 · </li>
            <li className="checkSomeInfoAboutInstagram">API · </li>
            <li className="checkSomeInfoAboutInstagram">채용 정보 · </li>
            <li className="checkSomeInfoAboutInstagram">개인정보처리방침 · </li>
            <li className="checkSomeInfoAboutInstagram">약관 · </li>
            <li className="checkSomeInfoAboutInstagram">디렉터리 · </li>
            <li className="checkSomeInfoAboutInstagram">프로필 · </li>
            <li className="checkSomeInfoAboutInstagram">해시태그 · </li>
            <li className="checkSomeInfoAboutInstagram">언어</li>
          </div>
          <div className="belowSomeInfo">© 2020 INSTAGRAM</div>
        </div>

        {/* <!-- 이거 오른쪽 전체 끝나 --> */}

        {/* <!-- 이 닫히는 section은 피드 두개를 닫는 section      --> */}
      </div>
    );
  }
}
export default RightSide;
