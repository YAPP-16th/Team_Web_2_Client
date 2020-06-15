import React, { useState } from "react";
import "./SearchInputPage.scss";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import SearchInputStep1Container from "../../containers/SearchInputStep1Container/Step1Container";
import SearchInputStep2Container from "../../containers/SearchInputStep2Container/Step2Container";
import SearchInputStep3Container from "../../containers/SearchInputStep3Container/Step3Container";
import useSearchInput from "../../hooks/useSearchInput";

type paramsType = {
  step: string;
};

const MoreItemButton = styled.div`
  width: 100%;
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
    background-color: #1d1d1d;
    font-family: NotoSansCJKkr;
    font-size: 18px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.8px;
    color: #5e5e5e;
    position: relative;
    cursor: pointer;
    display: inline;
  }
`;

const MoreItemButtonHovered = styled.div`
  width: 100%;
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
    background-color: #1d1d1d;
    position: relative;
    cursor: pointer;
    display: inline;
    width: 67px;
    height: 27px;
    font-family: NotoSansCJKkr;
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
  const [step, setStep] = useState(1);
  const history = useHistory();

  let container;

  const stepPrevHandler = () => {
    step > 1 && setStep(step - 1);
  };

  const stepForwardHandler = () => {
    if (step < 3) {
      setStep(step + 1);
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

  const prev = "< 이전으로";
  const next = "다음으로 >";

  const shake = () => {
    const option = document.querySelector("div#option");
    if (option) {
      option.classList.add("apply-shake")
    }
    setTimeout(function () {
      const option = document.querySelector("div#option");
      if (option) {
        option.classList.remove("apply-shake")
      }
    }, 600);
  }

  return (
    <>
      <div className="search_select_done">
        <SearchInputWrapper>
          {container}
          {isHover ? (
            <ButtonWrapper>
              <div className="option"></div>
              <MoreItemButton onClick={() => stepPrevHandler()}>
                {prev}
              </MoreItemButton>
              <MoreItemButtonHovered onClick={() => stepForwardHandler()}>
                {next}
              </MoreItemButtonHovered>
            </ButtonWrapper>
          ) : (
              <ButtonWrapper>
                <div className="optionWrapper">
                  <div id="option" className="option"> * 옵션을 선택해주세요</div>
                </div>
                {step === 1 ? (
                  <></>
                ) : (
                    <MoreItemButton onClick={() => stepPrevHandler()}>
                      {prev}
                    </MoreItemButton>
                  )}
                <MoreItemButton onClick={() => shake()}>
                  {next}
                </MoreItemButton>
              </ButtonWrapper>
            )}
        </SearchInputWrapper>
      </div>
    </>
  );
};

export default SearchInputPage;