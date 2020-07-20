import React, { useState, WheelEvent } from 'react';
import './LandingPage.scss';
import { Link } from 'react-router-dom';

import phoneMockUp from '../../assets/img/phone-mockup.png';
import busyMan from '../../assets/img/busy-man.png';

// Components
import Icon from '../../components/Icon/Icon';

const LandingPage = () => {
  let scrolled = false;
  const [scrollAnimation, setScrollAnimation] = useState(false);

  const onScroll = (e: any) => {
    if (!scrolled) {
      scrolled = true;
      const textScrollTrigger = setTimeout(() => {
        scrolled = false;
        setScrollAnimation(!scrollAnimation);
        clearTimeout(textScrollTrigger);
      }, 500);
    }
  };

  return (
    <>
      <div className="landing-page" onTouchMove={onScroll} onWheel={onScroll}>
        <div></div>
        <div className="intro">
          <Icon icon="logo" size="80px" className="logo" />
          <div>
            <div className="intro-text">
              불필요하게 <br />
              낭비되는 <br />
              <div
                className="emphasized-text-wrapper"
                data-testid="emphasized-text-wrapper"
              >
                <p
                  className={`emphasized-text1 ${
                    scrollAnimation
                      ? 'emphasized-text-slide-up'
                      : 'emphasized-text-slide-down'
                  }`}
                >
                  통학 시간
                </p>
                <p
                  className={`emphasized-text2 ${
                    scrollAnimation
                      ? 'emphasized-text-slide-up'
                      : 'emphasized-text-slide-down'
                  }`}
                >
                  통근 시간
                </p>
                을
              </div>{' '}
              <br />
              절약하세요!
            </div>
            <div
              className="intro-text-desktop"
              data-testid="intro-text-desktop"
            >
              불필요하게 낭비되는 <br />
              <div
                className="emphasized-text-wrapper"
                data-testid="emphasized-text-wrapper"
              >
                <p
                  className={`emphasized-text1 ${
                    scrollAnimation
                      ? 'emphasized-text-slide-up'
                      : 'emphasized-text-slide-down'
                  }`}
                >
                  통학 시간
                </p>
                <p
                  className={`emphasized-text2 ${
                    scrollAnimation
                      ? 'emphasized-text-slide-up'
                      : 'emphasized-text-slide-down'
                  }`}
                >
                  통근 시간
                </p>
                을
              </div>{' '}
              절약하세요!
            </div>
            <div className="intro-sub-text">
              맞춤형 주거 지역 추천 <br />
              가이드라인 서비스
            </div>
          </div>
          <Link to="/search" className="intro-button">
            ZONE 찾기 <Icon className="next-icon" icon="next" size="20px" />
          </Link>
          <div className="scroll-text-desktop">scroll down</div>
        </div>
        <div className="desktop-elements">
          <div className="scroll-text">scroll down</div>
          <div className="image-wrapper">
            <img src={phoneMockUp} className="mockup-image" />
          </div>
        </div>
      </div>
      <video
        className="bg-video"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        // poster="images/Gaulois-poster.PNG"
      >
        <source src="/video/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="landing-page-desc">
        <div className="desc-intro">
          <h1 className="desc-intro-text">
            찾아존은 왜 <br className="text-break" />
            만들어졌나요?
          </h1>
        </div>
        <div className="desc-intro-cards-wrapper">
          <div className="desc-intro-cards">
            <div className="desc-intro-card">
              <div className="desc-content">
                <div className="card-image-wrapper">
                  <img className="card-image" src={busyMan} />
                  <div className="card-slide-button-right">
                    <Icon icon="back" color="black" size="6px" />
                  </div>
                </div>

                <h1 className="card-title">
                  6시에 칼퇴근해도 <br />
                  도착하면 어느덧 8시
                </h1>
                <p className="card-text">
                  하루 평균 출퇴근 시간 1시간 30분. <br />
                  우리는 매일매일 적지 않은 시간을 <br />
                  출퇴근길에 사용합니다.
                </p>
              </div>
            </div>
            <div className="desc-intro-card">
              <div className="desc-content">
                <div className="card-image-wrapper">
                  <img className="card-image" src={busyMan} />
                  <div className="card-slide-button-left">
                    <Icon icon="back" color="black" size="6px" />
                  </div>
                </div>
                <h1 className="card-title">
                  낭비되는 시간과 체력, <br />
                  지금보다 더 나은 삶을 위해
                </h1>
                <p className="card-text">
                  불필요한 이동 시간에 지친 <br />
                  현대인들을 위해 찾아존은 <br />더 나은 ‘주거 환경’에
                  집중합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-desc">
        <div className="desc-intro">
          <h1 className="desc-intro-text">
            찾아존으로 <br className="text-break" />
            무엇을 할 수 있나요?
          </h1>
        </div>
        <div className="desc-intro-cards-wrapper">
          <div className="desc-intro-cards">
            <div className="desc-intro-card">
              <div className="desc-content">
                <div className="card-image-wrapper">
                  <img className="card-image" src={busyMan} />
                  <div className="card-slide-button-right">
                    <Icon icon="back" color="black" size="6px" />
                  </div>
                </div>

                <h1 className="card-title">
                  발견하지 못했던 <br />
                  새로운 주거지역을 <br />
                  찾아보세요!
                </h1>
                <p className="card-text">
                  회사의 위치와 선호하는 교통 수단, <br />
                  희망 소요 시간 및 환승 횟수만 입력하세요. <br />
                  이동 시 스트레스와 피로감을 덜어줄 <br />
                  맞춤형 주거 지역을 만날 수 있습니다.
                </p>
              </div>
            </div>
            <div className="desc-intro-card">
              <div className="desc-content">
                <div className="card-image-wrapper">
                  <img className="card-image" src={busyMan} />
                  <div className="card-slide-button-left">
                    <Icon icon="back" color="black" size="6px" />
                  </div>
                </div>
                <h1 className="card-title">
                  지금보다 <br />
                  얼마나, 어떻게 더 <br />
                  편리해질까요?
                </h1>
                <p className="card-text">
                  현재 주거 환경과 비교를 통해 <br />
                  삶의 질이 얼마나 달라질지 체크해보세요! <br />
                  주변 시설과 교통편, 매물 정보까지 확인할 수 있어요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
