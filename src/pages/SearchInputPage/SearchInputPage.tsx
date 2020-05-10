import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import './ZoneSearchPage.scss';
import SearchInput from '../../containers/SearchInputContainer/SearchInput';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import SearchInput1 from '../../containers/SearchInputContainer/SearchInput1';
import SearchInput2 from '../../containers/SearchInputContainer/SearchInput2';
import SearchInput3 from '../../containers/SearchInputContainer/SearchInput3';
import Loading from '../../containers/SearchInputContainer/Loading';
import styled from 'styled-components';

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
    container = <SearchInput1 />;
  } else if (stepParam === '2') {
    container = <SearchInput2 />;
  } else if (stepParam === '3') {
    container = <SearchInput3 />;
  } else if (stepParam === 'loading') {
    container = <Loading />
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
