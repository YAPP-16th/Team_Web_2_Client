import React, { useState, WheelEvent } from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";
import phoneMockUp from "../../assets/img/phone-mockup.png";

// Components
import Icon from "../../components/Icon/Icon";

const LandingPage = () => {

  let scrolled = false;
  const [ scrollAnimation, setScrollAnimation ] = useState(false);

  const onScroll = (e: WheelEvent) => {
    if (!scrolled) {
      setScrollAnimation(true);
      scrolled = true;
      const textScrollTrigger = setTimeout(() => {
        console.log(e);
        scrolled = false;
        clearTimeout(textScrollTrigger);
      }, 1000);
    }
  }

  return (
    <div className="landing-page" onWheel={onScroll}>
      <div></div>
      <div className="intro">
        <Icon icon="logo" size="80px" className="logo" />
        <div>
          <div className="intro-text">
            불필요하게 <br />
            낭비되는 <br />
            <div className="emphasized-text-wrapper"><p className={`emphasized-text1 ${scrollAnimation ? "emphasized-text-slide-up" : "emphasized-text-slide-down"}`} >통학 시간</p><p className={`emphasized-text2 ${scrollAnimation ? "emphasized-text-slide-up" : "emphasized-text-slide-down"}`} >출퇴근 시간</p></div>을 <br />
            절약하세요!
          </div>
          <div className="intro-text-desktop">
            불필요하게 낭비되는 <br />
            통학 시간을 절약하세요!
          </div>
          <div className="intro-sub-text">
            맞춤형 주거 지역 추천 <br />
            가이드라인 서비스
          </div>
        </div>

        <div className="intro-button">
          <Link to="/searchInput/1">
            ZONE 찾기 <Icon className="next-icon" icon="next" size="20px" />
          </Link>
        </div>
        <div className="scroll-text-desktop">scroll down</div>
      </div>
      <div className="desktop-elements">
        <div className="scroll-text">
          scroll down
        </div>
        <div className="image-wrapper">
          <img src={phoneMockUp} className="mockup-image"/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
