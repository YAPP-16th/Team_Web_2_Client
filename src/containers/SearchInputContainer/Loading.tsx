import React, { useState } from 'react';
import '../../pages/SearchInputPage/ZoneSearchPage.scss';
import ZoneSearchPopUp from './ZoneSearchPopup';
import Dialog from '.././../components/Dialog/Dialog';
import styled from 'styled-components';
import HashTag from '../../containers/SearchInputContainer/HashTag';
import CurrentLocation from './CurrentLocation';
import group3 from './group3.png';

const Loading = () => {


  return (
    <>
      <div className="search1_select_done">
        <img src={group3}></img>
        <br />
        <span className="styledLoadingBlueText">회사(역삼동)</span>
        <span className="styledLoadingWhiteText">까지</span>
        <br />
        <span className="styledLoadingBlueText">지하철</span>
        <span className="styledLoadingWhiteText">로</span>
        <br />
        <span className="styledLoadingBlueText">10분-20분 이내</span>
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