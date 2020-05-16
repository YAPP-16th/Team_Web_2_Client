import React from 'react';
import './HeaderPage.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import queryString from 'query-string';

//Containers
import DefaultHeaderContainer from '../../containers/HeaderContainer/DefaultHeaderContainer';
import ZoneDetailHeaderContainer from '../../containers/HeaderContainer/ZoneDetailHeaderContainer';
import ZoneSearchResultHeaderContainer from '../../containers/HeaderContainer/ZoneSearchResultHeaderContainer';

type ParamsType = {
  id: string;
  feature: string;
}

const HeaderPage = ({ match, location, history}: RouteComponentProps<ParamsType>) => {  
  
  const query = queryString.parse(location.search);

  let HeaderContainer;

  if (location.hash.includes('/zone/')) {
    HeaderContainer = ZoneDetailHeaderContainer;
  } else if (location.search) {
    HeaderContainer = ZoneSearchResultHeaderContainer;
  } else {
    HeaderContainer = DefaultHeaderContainer;
  }

  return (
    <div className="header">
      <HeaderContainer />
    </div>
  )
}

export default withRouter(HeaderPage);
