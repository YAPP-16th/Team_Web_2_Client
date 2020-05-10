import React, { useState } from 'react';
import '../../pages/SearchInputPage/ZoneSearchPage.scss';
import ZoneSearchPopUp from './ZoneSearchPopup';
import Dialog from '.././../components/Dialog/Dialog';
import styled from 'styled-components';
import HashTag from '../../containers/SearchInputContainer/HashTag';
import CurrentLocation from './CurrentLocation';
import SearchInput1 from './SearchInput1';
import SearchInput2 from './SearchInput2';
import SearchInput3 from './SearchInput3';
import Loading from './Loading';
import icongps from './icongps.png';

const SearchInputWrapper = styled.div`
  height: 100%;
`

const SearchInput = () => {

  const MoreItemButton = styled.button`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
  text-align: center;
  color: #1d1d1d;
  // border-radius: 8px;
  padding: 17px 50px;
  background-color: var(--PrimaryColor);
  border: none;
  text-align: center;
`;


  return (
    <SearchInputWrapper>
      <SearchInput1></SearchInput1>
      <SearchInput2></SearchInput2>
      <SearchInput3 />
      <Loading />
      <MoreItemButton>다음으로</MoreItemButton>
    </SearchInputWrapper>
  );
}

export default SearchInput;
