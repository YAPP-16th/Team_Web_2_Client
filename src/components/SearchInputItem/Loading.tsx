import React, { useState } from 'react';
import ZoneSearchPopUp from './SearchInputStep1/ZoneSearchPopup';
import Dialog from '../Dialog/Dialog';
import styled from 'styled-components';
import HashTag from './SearchInputStep1/HashTag';
import CurrentLocation from './SearchInputStep1/CurrentLocation';
import group3 from '../../assets/img/group3.png';
import useSearchInput from '../../hooks/useSearchInput';


const Loading = () => {
  // 전역 상태
  const searchInput = useSearchInput();
  // Redux 에서 값 꺼내와서 내보내기
  const data = searchInput.searchInputData

  return (
    <>
      <div className="search1_select_done">
        <img src={group3}></img>
        <br />
        <span className="styledLoadingBlueText">{data.addressTag}</span>
        <span className="styledLoadingWhiteText">까지</span>
        <br />
        <span className="styledLoadingBlueText">{data.transitMode}</span>
        <span className="styledLoadingWhiteText">로</span>
        <br />
        <span className="styledLoadingBlueText">{data.minTime}분-{data.maxTime}분 이내</span>
        <span className="styledLoadingWhiteText">의</span>
        <br />
        <span className="styledLoadingWhiteText">Zone 들을</span>
        <br />
        <span className="styledLoadingWhiteText">검색하고있어요!</span>
      </div>
    </>
  )
}

export default Loading;