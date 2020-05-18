import React from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from 'react-router-dom';

// Components
import Toolbar from "../../components/Toolbar/Toolbar";
import Icon from "../../components/Icon/Icon";

type DefaultHeaderContainerProps = {
  displayLogo?: boolean;
  backgroundColor?: string;
}

const HeaderContainerWrapper = styled.div<{backgroundColor: string}>`
  position: relative;
  height: 100%;
  z-index: 100000;
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ""};
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

const DefaultHeaderContainer = ({ history, displayLogo, backgroundColor }: RouteComponentProps & DefaultHeaderContainerProps) => {
  // handlers
  const goHomePageHandler = () => history.push('/');
  
  return (
    <HeaderContainerWrapper
      backgroundColor={backgroundColor ? backgroundColor : ""}
    >
      <Toolbar
        leftContents={displayLogo && <Icon testId="go-home" onClick={goHomePageHandler} icon="simplifiedLogo" size="27px" />}
        rightContents={rightContents}
      />
    </HeaderContainerWrapper>
  );
};

DefaultHeaderContainer.defaultProps = {
  displayLogo: true
}

export default withRouter(DefaultHeaderContainer);
