import React, { useState } from 'react';
import ZoneSearchPopUp from './ZoneSearchPopup';
import Dialog from '../../Dialog/Dialog';
import styled from 'styled-components';
import HashTag from './HashTag';
import useSearchInput from '../../../hooks/useSearchInput';

import icongps from '../../../assets/img/icongps.png';

type InputProps = {
  click?: () => void;
}
const SearchInput1 = ({ click }: InputProps) => {
  const searchInput = useSearchInput();
  console.log(searchInput.searchInputData)
  const location = searchInput.searchInputData.address

  return (
    <>
      <div className="search1_select_done">
        {/* <input type="text" onChange={ZoneSearchClickHandler} value="주소를 입력하세요" /> */}
        {/* <ZoneSearchPopUp></ZoneSearchPopUp> */}
        <div className="search1_elements_wrapper">

          <div className="input_header_wrapper">
            <span className="STEP-1">STEP 1</span>
            <span className="location"> / location</span>
          </div>
          <div className="input_question_wrapper">
            <span className="Rectangle_ment">평소 자주 방문하는 곳의</span>
            <span className="Rectangle_ment">위치를 알려주세요</span>
          </div>
          <HashTag />
          <input
            type="text"
            placeholder={location}
            onClick={click}
            className="Rectangle_Long"
          ></input>
          {/* <img src={icongps} style={{ width: '30px' }} alt="currentLocation" onClick={onClickCurrentLocationHandler} /> */}
        </div>
      </div>

    </>
  );
}

export default SearchInput1;