import React, { useState } from 'react';
import './SearchInputPage.scss';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import SearchInputStep1Container from '../../containers/SearchInputStep1Container/Step1Container';
import SearchInputStep2Container from '../../containers/SearchInputStep2Container/Step2Container';
import SearchInputStep3Container from '../../containers/SearchInputStep3Container/Step3Container';
import useSearchInput from '../../hooks/useSearchInput';

const MoreItemButton = styled.div`
  width: 100%;
  cursor: pointer;
  font-family: NotoSansBold;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
  text-align: center;
  color: #1d1d1d;
  padding: 17px 50px;
  background-color: var(--GreyTextColor);
  border: none;
  position: absolute;
  bottom: 0;
  @media screen and (min-width: 1060px) {
    top: 20px;
    background-color: #1d1d1d;
    font-family: NotoSansDemiLight;
    font-size: 18px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.8px;
    color: #5e5e5e;
    position: relative;
    display: inline;
  }
`;

const MoreItemButtonHovered = styled.div`
  width: 100%;
  cursor: pointer;
  font-family: NotoSansBold;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
  text-align: center;
  color: #1d1d1d;
  padding: 17px 50px;
  background-color: var(--PrimaryColor);
  border: none;
  text-align: center;
  position: absolute;
  bottom: 0;
  @media screen and (min-width: 1060px) {
    top: 20px;
    background-color: #1d1d1d;
    position: relative;
    display: inline;
    width: 67px;
    height: 27px;
    font-family: NotoSansDemiLight;
    font-size: 18px;
    font-weight: 320;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.8px;
    color: #ffffff;
  }
`;

const SearchInputWrapper = styled.div`
  height: 95%;
`;

const ButtonWrapper = styled.div`
  align-items: center;
  text-align: center;
`;

const SearchInputPage = () => {
  const searchInput = useSearchInput();

  let data = searchInput.searchInputData;

  const [isHover, setIsHover] = useState(false as boolean);
  const history = useHistory();
  const state: any = history.location.state;
  const step = state ? state.step : 1;

  let container;

  const stepPrevHandler = () => {
    step > 1 && history.goBack();
  };

  const stepForwardHandler = () => {
    if (step < 3) {
      // if (step === 1) {
      //   history.replace("/search", { step: step + 1 });
      // } else {
      history.push('/search', { step: step + 1 });
    } else {
      history.push(
        `/search?address=${data.address}&addressTag=${data.addressTag}&maxTime=${data.maxTime}&minTime=${data.minTime}&transferLimit=${data.transferLimit}&transitMode=${data.transitMode}`
      );
    }
  };

  switch (step) {
    case 1:
      container = (
        <SearchInputStep1Container
          setIsHover={(isHover: boolean) => setIsHover(isHover)}
        />
      );
      break;
    case 2:
      container = <SearchInputStep2Container setIsHover={setIsHover} />;
      break;
    case 3:
      container = <SearchInputStep3Container setIsHover={setIsHover} />;
      break;
  }

  const prev = '< 이전으로';
  const next = '다음으로 >';

  const shake = () => {
    const option = document.querySelector('div#option');
    if (option) {
      option.classList.add('apply-shake');
    }
    setTimeout(function () {
      const option = document.querySelector('div#option');
      if (option) {
        option.classList.remove('apply-shake');
      }
    }, 600);
  };

  return (
    <>
      <div className="search_select_done">
        <SearchInputWrapper>
          {container}
          {isHover ? (
            <ButtonWrapper>
              <div className="option"></div>
              {step === 1 ? (
                <></>
              ) : (
                <MoreItemButton onClick={() => stepPrevHandler()}>
                  {prev}
                </MoreItemButton>
              )}
              <MoreItemButtonHovered onClick={() => stepForwardHandler()}>
                {next}
              </MoreItemButtonHovered>
            </ButtonWrapper>
          ) : (
            <ButtonWrapper>
              <div className="optionWrapper">
                <div id="option" className="option">
                  * 옵션을 선택해주세요
                </div>
              </div>
              {step === 1 ? (
                <></>
              ) : (
                <MoreItemButton onClick={() => stepPrevHandler()}>
                  {prev}
                </MoreItemButton>
              )}
              <MoreItemButton onClick={() => shake()}>{next}</MoreItemButton>
            </ButtonWrapper>
          )}
        </SearchInputWrapper>
      </div>
    </>
  );
};

export default SearchInputPage;
