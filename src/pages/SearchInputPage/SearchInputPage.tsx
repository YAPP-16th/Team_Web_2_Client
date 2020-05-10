import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import './ZoneSearchPage.scss';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import styled from 'styled-components';

import SearchInputStep1Container from '../../containers/SearchInputStep1Container/Step1Container';
import SearchInputStep2Container from '../../containers/SearchInputStep2Container/Step2Container';
import SearchInputStep3Container from '../../containers/SearchInputStep3Container/Step3Container';
import SearchInputLoadingContainer from '../../containers/SearchInputLoadingContainer/SearchInputLoadingContainer';

type paramsType = {
  step: string;
}

const SearchInputPage = ({ match, history }: RouteComponentProps<paramsType>) => {

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

  const SearchInputWrapper = styled.div`
  height: 100%;
`

  let container;

  const stepForwardHandler = (step: string) => {
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

      default:
        break;
    }
  }

  // history.push
  const stepParam = match.params.step;
  if (stepParam === '1') {
    container = <SearchInputStep1Container />;
  } else if (stepParam === '2') {
    container = <SearchInputStep2Container />;
  } else if (stepParam === '3') {
    container = <SearchInputStep3Container />;
  } else if (stepParam === 'loading') {
    container = <SearchInputLoadingContainer />
  }

  return (
    <>
      <SearchInputWrapper>
        <div style={{ backgroundColor: 'black' }}>
          {container}
        </div>
        <MoreItemButton onClick={() => stepForwardHandler(stepParam)}>다음으로</MoreItemButton>
      </SearchInputWrapper>
    </>
  );
};

export default withRouter(SearchInputPage);
