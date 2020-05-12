import React from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from 'react-router-dom';

// Components
import Toolbar from "../../components/Toolbar/Toolbar";
import Icon from "../../components/Icon/Icon";

// Dummy Data

const HeaderContainerWrapper = styled.div`
  position: sticky;
  top: 100px;
  @media screen and (min-width: 1060px) {
    width: 1120px;
    margin: auto;
  }
`;

const RightContentsWrapper = styled.div`
  display: flex;
  > div {
    :not(:last-child) {
      margin-right: 22px;
    }
  }
`
const rightContents = <RightContentsWrapper><Icon icon="search" size="18px"/><Icon icon="menu" size="18px"/></RightContentsWrapper>

const DefaultHeaderContainer = ({ history }: RouteComponentProps) => {
  // handlers
  const goHomePageHandler = () => history.push('/');
  
  return (
    <HeaderContainerWrapper>
      <Toolbar
        leftContents={<Icon testId="go-home" onClick={goHomePageHandler} icon="simplifiedLogo" size="27px" />}
        rightContents={rightContents}
      />
    </HeaderContainerWrapper>
  );
};

export default withRouter(DefaultHeaderContainer);
