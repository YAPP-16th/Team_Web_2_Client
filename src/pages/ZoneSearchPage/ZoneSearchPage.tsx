import React from "react";
import "./ZoneSearchPage.scss";
import {
  HashRouter,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";

import queryString from "query-string";

// Page
import ZoneDetailPage from "../ZoneDetailPage/ZoneDetailPage";

const ZoneSearchPage = ({ match, location }: RouteComponentProps) => {
  const query = queryString.parse(location.search);

  if (location.search) {

  }

  return (
    <div className="zone-search">
      <HashRouter basename="/zone">
        <Route path="/:id/:feature" component={ZoneDetailPage} />
      </HashRouter>
    </div>
  );
};

export default withRouter(ZoneSearchPage);
