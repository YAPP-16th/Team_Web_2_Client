import React, { useState } from 'react';
import '../../pages/SearchInputPage/ZoneSearchPage.scss';
import ZoneSearchPopUp from './ZoneSearchPopup';
import Dialog from '.././../components/Dialog/Dialog';
import styled from 'styled-components';
import HashTag from '../../containers/SearchInputContainer/HashTag';

import icongps from './icongps.png';

const SearchInputWrapper = styled.div`
  height: 100%;
`

// const SearchInput = () => {
//   const onClickLocationHandler = () => {
//     console.log('hit'); // ZoneSearchPopUp 팝업 창 띄우기
//     return setIsOpen(!isOpen)
//   };

//   const onClickCurrentLocationHandler = () => {
//     var x = document.getElementById("demo");

//     function getLocation() {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//       } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//       }
//     }

//     function showPosition(position: any) {
//       x.innerHTML = "Latitude: " + position.coords.latitude +
//         "<br>Longitude: " + position.coords.longitude;
//     }

//     function showError(error: any) {
//       switch (error.code) {
//         case error.PERMISSION_DENIED:
//           x.innerHTML = "User denied the request for Geolocation."
//           break;
//         case error.POSITION_UNAVAILABLE:
//           x.innerHTML = "Location information is unavailable."
//           break;
//         case error.TIMEOUT:
//           x.innerHTML = "The request to get user location timed out."
//           break;
//         case error.UNKNOWN_ERROR:
//           x.innerHTML = "An unknown error occurred."
//           break;
//       }
//     }

//     getLocation();

//   }

const [isOpen, setIsOpen] = useState(false as boolean);


return (
  <SearchInputWrapper>
    {isOpen
      ?
      <Dialog
        className="pop_up"
        display={isOpen}
        click={onClickLocationHandler}
      >
        <ZoneSearchPopUp />
      </Dialog>
      :
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
        <HashTag />
        <br />
        <input
          type="text"
          placeholder="주소를 입력하세요"
          onClick={onClickLocationHandler}
          className="Rectangle_Long"
        ></input>
        <img src={icongps} style={{ width: '30px' }} alt="currentLocation" />
      </div>
    }
  </SearchInputWrapper>
);
};

export default SearchInput;
