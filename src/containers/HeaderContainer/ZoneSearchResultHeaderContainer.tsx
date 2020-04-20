import React from "react";
import styled from "styled-components";
import { Route, Switch, HashRouter } from 'react-router-dom';

// Components
import Toolbar from "../../components/Toolbar/Toolbar";
import ZoneSearchResultHeaderInfo from "../../components/HeaderInfo/SearchResultInfo";
import Icon from "../../components/Icon/Icon";

import useListView from '../ListViewContainer/ListViewHooks'

// Container
import ZoneDetailHeaderContainer from './ZoneDetailHeaderContainer';

// Dummy Data
const itemCount = 17;

const HeaderContainerWrapper = styled.div`
  position: sticky;
  top: 100px;
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


const ZoneSearchResultHeaderContainer = () => {
  // State
  const ListView = useListView();

  let addedHeight = "0px";

  if (ListView.toggled) {
    addedHeight = "30px";
  } else {
    addedHeight = "0px";
  }

  const Header = () => (
    <HeaderContainerWrapper>
      <Toolbar
        leftContents={<Icon icon="simplifiedLogo" size="27px" />}
        rightContents={rightContents}
      />
      <ZoneSearchResultHeaderInfo itemCount={itemCount} addedHeight={addedHeight} />
    </HeaderContainerWrapper>
  )

  return (
    <Switch>
      <Route path="/" component={Header} />
      <HashRouter basename="/zone">
        <Route path="/:id/:feature" component={ZoneDetailHeaderContainer} />
      </HashRouter>
    </Switch>
  );
};

export default ZoneSearchResultHeaderContainer;
