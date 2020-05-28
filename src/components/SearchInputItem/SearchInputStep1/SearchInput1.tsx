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
      <div className="search_select_done">
        <div className="search_elements_wrapper">
          <div className="input_header_wrapper">
            <span className="STEP">STEP 1</span>
            <span className="slash"> / location</span>
          </div>
          <div className="input_question_wrapper">
            <span className="Rectangle_ment">평소 자주 방문하는 곳의</span>
            <span className="Rectangle_ment">위치를 알려주세요.</span>
          </div>
          <HashTag />
          <input
            type="text"
            placeholder={location}
            onClick={click}
            className="Rectangle_Long"
          ></input>
          <span className="option"> * 옵션을 선택해주세요</span>
          {/* <img src={icongps} style={{ width: '30px' }} alt="currentLocation" onClick={onClickCurrentLocationHandler} /> */}
        </div>
      </div>

    </>
  );
}

export default SearchInput1;