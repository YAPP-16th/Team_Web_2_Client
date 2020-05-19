import React, { useState } from 'react';
import ZoneSearchPopUp from './ZoneSearchPopup';
import Dialog from '../../Dialog/Dialog';
import styled from 'styled-components';
import HashTag from './HashTag';
import getLocation from './CurrentLocation';

import icongps from '../../../assets/img/icongps.png';

type InputProps = {
  click?: () => void;
  location: string;
  setData: any;
  setUploadedHashTag: any;
}
const SearchInput1 = ({ click, location, setData, setUploadedHashTag }: InputProps) => {

  const onClickCurrentLocationHandler = () => {
    getLocation();
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
        <br />
        <HashTag
          setData={setData}
          setUploadedHashTag={setUploadedHashTag}
        />
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder={location}
          onClick={click}
          className="Rectangle_Long"
        ></input>
        {/* <img src={icongps} style={{ width: '30px' }} alt="currentLocation" onClick={onClickCurrentLocationHandler} /> */}

      </div>

    </>
  );
}

export default SearchInput1;