import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import './SearchInputPage.scss';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import styled from 'styled-components';

import SearchInputStep1Container from '../../containers/SearchInputStep1Container/Step1Container';
import SearchInputStep2Container from '../../containers/SearchInputStep2Container/Step2Container';
import SearchInputStep3Container from '../../containers/SearchInputStep3Container/Step3Container';
import SearchInputLoadingContainer from '../../containers/SearchInputLoadingContainer/SearchInputLoadingContainer';

import useSearchInput from '../../hooks/useSearchInput';

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
    color: white;
    position: relative;
    cursor: pointer;
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
  // border-radius: 8px;
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
  }
  `


  const SearchInputWrapper = styled.div`
  // width: 100%;
  height: calc(100% - 115px);
  // background-color: var(--PrimaryColor);
`


  // 전역 상태
  // const searchInput = useSearchInput();

  // var processed = { ...searchInput.searchInputData };

  const [isHover, setIsHover] = useState(false as boolean)

  // const handleSearchInput = (target: any, data: any) => {
  //   if (target === "address") {
  //     processed.address = data;
  //   } else if (target === "addressTag") {
  //     processed.addressTag = data;
  //   } else if (target === "maxTime") {
  //     processed.maxTime = data;
  //   } else if (target === "minTime") {
  //     processed.minTime = data;
  //   } else if (target === "transferLimit") {
  //     processed.transferLimit = data;
  //   } else if (target === "transitMode") {
  //     processed.transitMode = data;
  //   }
  //   // setSelected(processed)
  // }


  let container;

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
        history.push("loading")
        break;

      case "loading":
        history.push("/search?startLat=37.5725&startLng=126.820454&zoneId=3771#");
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
  } else if (stepParam === 'loading') {
    container = <SearchInputLoadingContainer />
  }


  return (
    <>
      <SearchInputWrapper>
        {container}
        {isHover
          ? <MoreItemButtonHovered onClick={() => stepForwardHandler(stepParam)}>다음으로</MoreItemButtonHovered>
          : <><div className="option"> * 옵션을 선택해주세요</div>
            <MoreItemButton onClick={() => stepForwardHandler(stepParam)}>다음으로</MoreItemButton></>
        }
      </SearchInputWrapper>
    </>
  );
};

export default withRouter(SearchInputPage);
