import React, { useState } from 'react';
import '../../pages/SearchInputPage/ZoneSearchPage.scss';
import ZoneSearchPopUp from './ZoneSearchPopup';
import Dialog from '.././../components/Dialog/Dialog';
import styled from 'styled-components';
import HashTag from '../../containers/SearchInputContainer/HashTag';
import CurrentLocation from './CurrentLocation';

const SearchInput2 = () => {

  const transport = ['지하철', '버스', '자전거', '도보', '자동차']

  const transportList = transport.map((tp, idx) => {
    return (
      <>
        <label>
          <input type="radio" id="transport" name="transport" value={tp} ></input>
          <div className="transportList">{tp}</div>
        </label>
      </>
    );
  });

  return (
    <>

      <div className="search1_select_done">
        {/* <input type="text" onChange={ZoneSearchClickHandler} value="주소를 입력하세요" /> */}
        {/* <ZoneSearchPopUp></ZoneSearchPopUp> */}
        <span className="STEP-1">STEP 2</span>
        <span className="location"> / transport</span>
        <br />
        <span className="Rectangle_ment">선호하는 이동수단을</span>
        <br />
        <span className="Rectangle_ment">선택해주세요</span>
        <br />
        {transportList}
      </div>


    </>
  );
}

export default SearchInput2;