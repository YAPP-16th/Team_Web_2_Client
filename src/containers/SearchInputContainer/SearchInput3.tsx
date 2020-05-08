import React, { useState } from 'react';
import '../../pages/SearchInputPage/ZoneSearchPage.scss';
import ZoneSearchPopUp from './ZoneSearchPopup';
import Dialog from '.././../components/Dialog/Dialog';
import styled from 'styled-components';
import HashTag from '../../containers/SearchInputContainer/HashTag';
import CurrentLocation from './CurrentLocation';

const SearchInput3 = () => {

  const times = ['0-10분', '10분-20분', '20분-30분', '30분 이상']

  const timeList = times.map((time, idx) => {
    return (
      <>
        <label>
          <input type="radio" id="transport" name="transport" value={time} ></input>
          <div className="transportList">{time}</div>
        </label>
      </>
    );
  });

  return (
    <>

      <div className="search1_select_done">
        {/* <input type="text" onChange={ZoneSearchClickHandler} value="주소를 입력하세요" /> */}
        {/* <ZoneSearchPopUp></ZoneSearchPopUp> */}
        <span className="STEP-1">STEP 3</span>
        <span className="location"> / time</span>
        <br />
        <span className="Rectangle_ment">이동시 희망하는 소요시간을</span>
        <br />
        <span className="Rectangle_ment">선택해주세요 (편도기준)</span>
        <br />
        {timeList}
      </div>


    </>
  );
}
export default SearchInput3;