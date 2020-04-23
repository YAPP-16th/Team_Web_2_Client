import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import './ZoneSearchPage.scss';
import ZoneSearchPopUp from './ZoneSearchPopup';


const ZoneSearchPage = () => {
  const onClickLocationHandler = () => {
    console.log('hit')  // ZoneSearchPopUp 팝업 창 띄우기
  }
  return (
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
      <input type="text" placeholder="주소를 입력하세요" onClick={onClickLocationHandler} className="Rectangle_Long">
      </input>
      <input type="button" className="Rectangle_location"/>
      <span className="Rectangle_ment">Footer 부분</span>

      {/* <script>
        new daum.Postcode({
          oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
          // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        }
        }).open();
      </script> */}
    </div>
  )
}

export default ZoneSearchPage;