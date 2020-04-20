import React from "react";
import "./ZoneSearchPage.scss";
import {
  HashRouter,
  withRouter,
  Route,
  Link,
  RouteComponentProps,
  Switch,
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
      <Switch>
        <HashRouter basename="/zone">
          <Route path="/:id/:feature" exact component={ZoneDetailPage} />
        </HashRouter>
        <Route path="/search" exact component={() => <Link to="/search?key=value">Click</Link>}/>
      </Switch>
    </div>
  );
};

export default withRouter(ZoneSearchPage);
