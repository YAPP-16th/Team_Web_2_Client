import React, { useState } from 'react';
// import '../../pages/SearchInputPage/ZoneSearchPage.scss';
import ZoneSearchPopUp from './ZoneSearchPopup';
import Dialog from '../../Dialog/Dialog';
import styled from 'styled-components';
import HashTag from './HashTag';
import CurrentLocation from './CurrentLocation';

import icongps from '../../../assets/img/icongps.png';

type InputProps = {
  click?: () => void;
}
const SearchInput1 = ({ click }: InputProps) => {

  const onClickCurrentLocationHandler = () => {
    console.log('hit')
    // CurrentLocation()
  }

  return (
    <>
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
          onClick={click}
          className="Rectangle_Long"
        ></input>
        <img src={icongps} style={{ width: '30px' }} alt="currentLocation" onClick={onClickCurrentLocationHandler} />

      </div>
      }

    </>
  );
}

export default SearchInput1;