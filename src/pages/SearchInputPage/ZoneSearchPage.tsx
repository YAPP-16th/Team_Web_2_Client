import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import './ZoneSearchPage.scss';
import ZoneSearchPopUp from './ZoneSearchPopup';

const ZoneSearchPage = () => {
  const onClickLocationHandler = () => {
    console.log('hit'); // ZoneSearchPopUp 팝업 창 띄우기
    return (
      <>
        {/* // eslint-disable-next-line @typescript-eslint/no-unused-expressions */}
        <ZoneSearchPopUp />
      </>
    );
  };
  return (
    // <>
    // <ZoneSearchPopUp></ZoneSearchPopUp>
    // <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false"></script>
    // </>

    <div className="search1_select_done">
      {/* <input type="text" onChange={ZoneSearchClickHandler} value="주소를 입력하세요" /> */}
      {/* <ZoneSearchPopUp></ZoneSearchPopUp> */}
      <span className="STEP-1">STEP 1</span>
      <span className="location"> / location</span>
      <br />
      <span className="Rectangle_ment">평소 자주 방문하는 곳의</span>
      <br />
      <span className="Rectangle_ment">위치를 알려주세요</span>
      <br />
      <span className="Rectangle_ment">해시태그부분</span>
      <br />
      <input
        type="text"
        placeholder="주소를 입력하세요"
        onClick={onClickLocationHandler}
        className="Rectangle_Long"
      ></input>
      <input type="button" className="Rectangle_location" />
      <span className="Rectangle_ment">Footer 부분</span>
    </div>
  );
};

export default ZoneSearchPage;
