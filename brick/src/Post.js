import React from "react";

export default function Post() {
  return (
    <section className="post">
      <section className="poster">
        <span id="post-profile">
          <div id="profile-picture"></div>
          <div id="profile-text">
            <p id="name">벽돌</p>
            <p id="time">12시간전</p>
          </div>
        </span>
        <div id="post-picture"></div>
      </section>

      <section className="post-text">
        <h1 id="post-title">핸드폰 아이폰10</h1>
        <p id="post-tag">#전자기기 &nbsp;&nbsp; #생활</p>
        <p id="post-description">아이폰10 경매 ㄱㄱ</p>
        <div id="priceJjim">
          <p id="post-price">40,000</p>
          <img src="jjim.png" alt="찜" id="jjim" />
        </div>
      </section>

      <section className="comments">
        <input type="text" autoComplete="off" id="comment-input"></input>
        <button id="pen">
          <img src="pen.png" />
        </button>
        <div id="comment">
          <span id="comment-profile"></span>
          <p id="profile-name">❤경민❤</p>
          <p id="profile-time">13시간 전</p>
          <p id="comment-text">50000원 어떠신가여</p>
          <button id="delete">
            <img id="bin" src="bin.png" />
          </button>
        </div>
        <div id="comment">
          <span id="comment-profile"></span>
          <p id="profile-name">❤경민❤</p>
          <p id="profile-time">13시간 전</p>
          <p id="comment-text">50000원 어떠신가여</p>
        </div>
        <div id="comment">
          <span id="comment-profile"></span>
          <p id="profile-name">❤경민❤</p>
          <p id="profile-time">13시간 전</p>
          <p id="comment-text">50000원 어떠신가여</p>
        </div>
      </section>
    </section>
  );
}
