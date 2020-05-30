import React, { useState } from 'react';
import './SearchInputPage.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import SearchInputStep1Container from '../../containers/SearchInputStep1Container/Step1Container';
import SearchInputStep2Container from '../../containers/SearchInputStep2Container/Step2Container';
import SearchInputStep3Container from '../../containers/SearchInputStep3Container/Step3Container';
import searchInput from '../../modules/searchInput';
import useSearchInput from '../../hooks/useSearchInput';
import { search } from '../../assets/svgs/icons';

type paramsType = {
  step: string;
}

const SearchInputPage = ({ match, history }: RouteComponentProps<paramsType>) => {
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
    font-family: NotoSansCJKkr;
    font-size: 18px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.8px;
    color: var(--PrimaryColor);
    position: relative;
    cursor: pointer;
    display: inline;
  }
  `


  const SearchInputWrapper = styled.div`
    height: 95%;
`

  const ButtonWrapper = styled.div`
    align-items: center;
    text-align: center;
  `


  // 전역 상태
  const searchInput = useSearchInput();
  var data = searchInput.searchInputData

  const [isHover, setIsHover] = useState(false as boolean)

  let container;

  const stepPrevHandler = (step: string) => {
    switch (step) {

      case "2":
        history.push("1")
        break;

      case "3":
        history.push("2")
        break;

      default:
        break;

    }
  }

  const stepForwardHandler = (step: string) => {
    // searchInput.setSearchInputData(processed)
    switch (step) {
      case "1":
        history.push("2")
        break;

      case "2":
        history.push("3")
        break;

      case "3":
        history.push(`/search?address=${data.address}&addressTag=${data.addressTag}&maxTime=${data.maxTime}&minTime=${data.minTime}&transferLimit=${data.transferLimit}&transitMode=${data.transitMode}`);
        break;

      default:
        break;

    }
  }
  // history.push
  const stepParam = match.params.step;
  if (stepParam === '1') {
    container =
      <SearchInputStep1Container
        setIsHover={(isHover: boolean) => setIsHover(isHover)}
      />;
  } else if (stepParam === '2') {
    container =
      <SearchInputStep2Container
        setIsHover={setIsHover}
      />;
  } else if (stepParam === '3') {
    container =
      <SearchInputStep3Container
        setIsHover={setIsHover}
      />;
  }

  const prev = "< 이전으로"

  return (
    <>
      <div className="search_select_done">
        <SearchInputWrapper>
          {container}
          {isHover
            ?
            <ButtonWrapper>
              <div className="option"></div>
              <MoreItemButton onClick={() => stepPrevHandler(stepParam)}>{prev}</MoreItemButton>
              <MoreItemButtonHovered onClick={() => stepForwardHandler(stepParam)}>다음으로 ></MoreItemButtonHovered>
            </ButtonWrapper>
            : <ButtonWrapper>
              <div className="optionWrapper">
                <div className="option"> * 옵션을 선택해주세요</div>
              </div>
              {stepParam === "1"
                ? <></>
                : <MoreItemButton onClick={() => stepPrevHandler(stepParam)}>{prev}</MoreItemButton>
              }
              <MoreItemButton onClick={() => stepForwardHandler(stepParam)}>다음으로 ></MoreItemButton>
            </ButtonWrapper>
          }
        </SearchInputWrapper>
      </div>
    </>
  );
};

export default withRouter(SearchInputPage);
