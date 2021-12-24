import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const Header = () => {
  const [isLogin, setLogin] = useState(false);
  const [isProfile, setProfile] = useState(false);
  const [isClick, setClick] = useState(false);

  const onProfile = () => {
    setClick(true);
    setProfile(!isProfile);
  };

  return (
    <>
      <font>
        {" "}
        {/* 폰트 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ruda&display=swap"
          rel="stylesheet"
        />
      </font>

      <header>
        {" "}
        {/* 헤더바 */}
        <div>
          <img src="brickLogo.png" />
        </div>
        <nav>
          <ul>
            <li
              onClick={() => setLogin(true)}
              tapindex="0"
              style={{ color: isLogin ? "#000" : "#727272" }}
            >
              <h3>로그인</h3>
            </li>
            <li
              onClick={onProfile}
              style={{ color: isProfile ? "#000" : "#727272" }}
            >
              <h3>프로필</h3>
            </li>
            <li style={{ color: "#727272" }}>
              <h3>찜</h3>
            </li>
            <Profile place={isProfile} start={isClick} />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
