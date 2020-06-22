import React from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from 'react-router-dom';

// Components
import Toolbar from "../../components/Toolbar/Toolbar";
import Icon from "../../components/Icon/Icon";

import useListView from '../../hooks/listViewHooks';

// Container
import ZoneDetailHeaderContainer from './ZoneDetailHeaderContainer';

// Dummy Data
const itemCount = 17;

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


const ZoneSearchResultHeaderContainer = ({history}: RouteComponentProps) => {
  // State
  const ListView = useListView();

  let addedHeight;

  if (ListView.toggled) {
    addedHeight = "30px";
  } else {
    addedHeight = "0px";
  }

  const goHomePageHandler = () => history.push('/');

  return (
    <HeaderContainerWrapper>
      <Toolbar
        leftContents={<Icon testId="go-home" icon="simplifiedLogo" onClick={goHomePageHandler} size="27px" />}
        rightContents={rightContents}
      />
    </HeaderContainerWrapper>
  );
};

export default withRouter(ZoneSearchResultHeaderContainer);
