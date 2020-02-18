import React, { Component } from "react";
import Bookmark from "../Images/bookmark.png";
import Comment from "../Images/comment.png";
import Dots from "../Images/real-three-dot.png";
import Share from "../Images/share.png";
import Heart from "../Images/heart.png";
class Feed extends Component {
  constructor(props) {
    super();

    this.state = {
      username: "sunset_aeri",
      comment: "",
      comments: []
    };
    // comment들어올 객체와 두개 객체 형태로 집어넣을 comments배열 만들기
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  handleComment = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleSubmit = e => {
    if (this.state.comment) {
      e.preventDefault();
      // 페이지 새로고침되지 않게
      console.log(this.state);
      this.state.comments.push({
        username: "sunset_aeri",
        comment: this.state.comment
      });
      // comments배열 내에 원소가 객체 형태이다
      this.setState({
        comment: ""
      });
      // 배열 내 원소로 들어가면 comment비운다.
    }
  };
  render() {
    const commentsList = this.state.comments.map((x, index) => (
      <div className="divClass" key={index}>
        {/* index말고 더 고유한 값을 원한다 */}

        <span className="newCommentMustHavePadding">{x.username}</span>
        <span className="addClassForNewComment">{x.comment}</span>
        <img className="heartOfFirstComment" alt="하트" src={Heart} />
        <button alt="" className="deleteClass_1">
          x
        </button>
      </div>
    ));
    return (
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
              <img src={Bookmark} alt="북마크" className="feedBookmark" />
            </section>
            <section className="howManyPeopleViewParent">
              <div className="howManyPeopleView">조회 44,315회 </div>
            </section>
            <div className="marginOfFeedMainText">
              <div className="idNameIsBold">soonmoo_cat</div>
              <div className="feedMainText">할로윈 그게 뭐냥 먹는거냥 킁킁</div>
              <p className="tagInFeedIsBlue">#순무 #SoonMoo</p>
            </div>
            <div className="seeCommentButton" alt="댓글보기">
              댓글 71개 모두 보기
            </div>

            <div className="commentCollection">
              <div className="firstComment">
                <span className="idOfFirstComment">h.n.quang</span>
                <span className="addClassForNewComment">
                  나만 고양이 없어..
                </span>
                <img className="heartOfFirstComment" alt="하트" src={Heart} />
              </div>
              <div className="secondComment">
                <span className="idOfSecondComment">munchkin_haul</span>
                <span className="addClassForNewComment">
                  흐헝ㅠㅠ졸귀탱구!! 순무농장은 사랑인거 알쥬
                </span>
                <img alt="하트" className="heartOfSecondComment" src={Heart} />
              </div>
              {/* <!-- *********************************** --> */}
              <div className="addNewCommentList_1">{commentsList}</div>
              {/* 렌더링의 const commentsList 호출 */}
              {/* <!-- *************************************** --> */}
              <div className="whenThisFeedUploded">42분 전</div>
              <section className="commentBox">
                <form className="submitForm_1">
                  <input
                    type="text"
                    className="addComment_1"
                    placeholder="댓글 달기..."
                    value={this.state.comment}
                    onChange={this.handleComment}
                  />
                  <input
                    type="button"
                    value="게시"
                    className="sumbitBtn"
                    onClick={this.handleSubmit}
                  />
                </form>
              </section>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feed;
