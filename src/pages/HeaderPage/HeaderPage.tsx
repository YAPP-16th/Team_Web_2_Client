import React from 'react';
import './HeaderPage.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import queryString from 'query-string';

//Containers
import DefaultHeaderContainer from '../../containers/HeaderContainer/DefaultHeaderContainer';
import ZoneDetailHeaderContainer from '../../containers/HeaderContainer/ZoneDetailHeaderContainer';
import ZoneSearchResultHeaderContainer from '../../containers/HeaderContainer/ZoneSearchResultHeaderContainer';
import { loadavg } from 'os';

type ParamsType = {
  id: string;
  feature: string;
}

const HeaderPage = ({ match, location, history}: RouteComponentProps<ParamsType>) => {  
  
  let HeaderContainer;

  const isLanding = location.pathname === '/' ? "fixed" : "initial";

  if (location.hash.includes('/zone/')) {
    HeaderContainer = ZoneDetailHeaderContainer;
  } else if (location.search) {
    HeaderContainer = ZoneSearchResultHeaderContainer;
  } else {
    if (location.pathname === "/") {
      HeaderContainer = () => <DefaultHeaderContainer displayLogo={false} />;
    } else {
      HeaderContainer = () => <DefaultHeaderContainer displayLogo />;
    }
  }

  return (
    <div className="header" style={{position: isLanding}}>
      <HeaderContainer />
    </div>
  )
}

export default withRouter(HeaderPage);
