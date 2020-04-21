import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import './ZoneSearchPage.scss';
import ZoneSearchPopUp from './ZoneSearchPopup';

const ZoneSearchPage = () => {
  const ZoneSearchClickHandler = () => {
    console.log('hit')
  }
  return (
    <>
      {/* <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script> */}
      {/* <input type="text" onChange={ZoneSearchClickHandler} value="주소를 입력하세요" /> */}
      <ZoneSearchPopUp></ZoneSearchPopUp>
      {/* <script>
        new daum.Postcode({
          oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
          // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        }
        }).open();
      </script> */}
    </>
  )
}

export default ZoneSearchPage;