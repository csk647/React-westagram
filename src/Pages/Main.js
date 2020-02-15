import React, { Component } from "react";
import Logotext from "../Images/logo_text.png";
import Logo from "../Images/logo.png";
import Bookmark from "../Images/bookmark.png";
import Comment from "../Images/comment.png";
import Explore from "../Images/explore.png";
import Heart from "../Images/heart.png";
import Profile from "../Images/profile.png";
import Dots from "../Images/real-three-dot.png";
import Share from "../Images/share.png";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
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
        <div className="backgroundMainParent">
          <div className="backgroundMain">
            <div className="mainSection">
              <div className="feeds_1">
                <article>
                  <header className="eachIdNameHeader">
                    <img
                      alt="soonmoo_cat님의 프로필 사진"
                      className="catProfilePhoto"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/72465561_1189675637887206_4403806496039632896_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=f6EieYT2lr0AX-Oo4V7&amp;oh=1e441a74b6a46ec0ae3b4ce5d69f4ce0&amp;oe=5EC0A18D"
                    />
                    <div>
                      <div className="headId">soonmoo_cat</div>
                    </div>
                    <img src={Dots} alt="" className="headerThreeDotIcon" />
                  </header>
                  <section className="haveBigCatPhoto">
                    <img
                      className="bigCatPhoto"
                      alt="고양이 메인 사진"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/75341356_140084060629694_7705998986886261755_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_cat=102&amp;_nc_ohc=_ABcpIgTc8kAX_f4C-C&amp;oh=c723956369ebce421b93bf9e7d1e495d&amp;oe=5EBA3CE5"
                    />
                  </section>
                  <div className="expressionButtons">
                    <section className="includeLikeButton">
                      <img src={Heart} alt="하트" className="feedHeart" />
                      <img src={Comment} alt="댓글" className="feedComment" />
                      <img src={Share} alt="공유" className="feedShare" />
                      <img
                        src={Bookmark}
                        alt="북마크"
                        className="feedBookmark"
                      />
                    </section>
                    <section className="howManyPeopleViewParent">
                      <div className="howManyPeopleView">조회 44,315회 </div>
                    </section>
                    <div className="marginOfFeedMainText">
                      <div className="idNameIsBold">soonmoo_cat</div>
                      <div className="feedMainText">
                        할로윈 그게 뭐냥 먹는거냥 킁킁
                      </div>
                      <p className="tagInFeedIsBlue">#순무 #SoonMoo</p>
                    </div>
                    <div className="seeCommentButton" alt="댓글보기">
                      댓글 71개 모두 보기
                    </div>

                    <div className="commentCollection">
                      <div className="firstComment">
                        <span className="idOfFirstComment">h.n.quang</span>
                        <span>나만 고양이 없어..</span>
                        <img
                          className="heartOfFirstComment"
                          alt="하트"
                          src={Heart}
                        />
                      </div>
                      <div className="secondComment">
                        <span className="idOfSecondComment">munchkin_haul</span>
                        <span>흐헝ㅠㅠ졸귀탱구!! 순무농장은 사랑인거 알쥬</span>
                        <img
                          alt="하트"
                          className="heartOfSecondComment"
                          src={Heart}
                        />
                      </div>
                      {/* <!-- *********************************** --> */}
                      <div className="addNewCommentList_1"></div>

                      {/* <!-- *************************************** --> */}
                      <div className="whenThisFeedUploded">42분 전</div>
                      <section className="commentBox">
                        <form className="submitForm_1">
                          <textarea
                            className="addComment_1"
                            placeholder="댓글 달기..."
                          ></textarea>
                          <button className="sumbitBtn">게시</button>
                        </form>
                      </section>
                    </div>
                  </div>
                </article>
              </div>

              {/* <!-- 두 번째 피드 끝 --> */}
              <div className="rightMain">
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
                            <div className="whenSecondStoryUploaded">
                              3시간 전
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="recommendOtherUser">
                      {/* <!-- 두 번째 박스 --> */}
                      <div className="firstLineOfSeeAllRecommendationParent">
                        <div className="firstLineOfSeeAllRecommendation">
                          {/* <!-- 회원님을 위한 추천,모두보기  --> */}
                          <div className="recommendationForYou">
                            회원님을 위한 추천
                          </div>
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
                            <div className="explainOfFirstRecommendUser">
                              인기
                            </div>
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
                      <li className="checkSomeInfoAboutInstagram">
                        {" "}
                        Instagram 정보 ·{" "}
                      </li>

                      <li className="checkSomeInfoAboutInstagram">도움말 · </li>
                      <li className="checkSomeInfoAboutInstagram">
                        홍보 센터 ·{" "}
                      </li>
                      <li className="checkSomeInfoAboutInstagram">API · </li>
                      <li className="checkSomeInfoAboutInstagram">
                        채용 정보 ·{" "}
                      </li>
                      <li className="checkSomeInfoAboutInstagram">
                        개인정보처리방침 ·{" "}
                      </li>
                      <li className="checkSomeInfoAboutInstagram">약관 · </li>
                      <li className="checkSomeInfoAboutInstagram">
                        디렉터리 ·{" "}
                      </li>
                      <li className="checkSomeInfoAboutInstagram">프로필 · </li>
                      <li className="checkSomeInfoAboutInstagram">
                        해시태그 ·{" "}
                      </li>
                      <li className="checkSomeInfoAboutInstagram">언어</li>
                    </div>
                    <div className="belowSomeInfo">© 2020 INSTAGRAM</div>
                  </div>

                  {/* <!-- 이거 오른쪽 전체 끝나 --> */}

                  {/* <!-- 이 닫히는 section은 피드 두개를 닫는 section      --> */}
                </div>
                {/* <!-- 위에꺼right main --> */}
              </div>
              {/* 이게 goRightside */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
