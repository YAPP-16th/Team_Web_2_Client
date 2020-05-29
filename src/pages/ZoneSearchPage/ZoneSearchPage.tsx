import React from "react";
import { Switch, HashRouter, Route } from "react-router-dom"
import {
  useLocation,
} from "react-router-dom";

// Page
import ZoneSearchResultPage from "../ZoneSearchResultPage/ZoneSearchResultPage";
import ZoneDetailPage from "../ZoneDetailPage/ZoneDetailPage";

interface loadingContainer {
  data: locationData;
  closeCallback?: () => void;
}

interface locationData {
  address: string;
  transitMode: string;
  minTime: number;
  maxTime: number;
}

const ZoneSearchPage = () => {

  const location = useLocation();

  return location.search ? (
    <ZoneSearchResultPage />
  ) : (
    <div className="zone-search">
      <Switch>
        <HashRouter basename="/zone">
          <Route path="/:id/:feature" exact component={ZoneDetailPage} />
        </HashRouter>
      </Switch>
    </div>
  )
};

export default ZoneSearchPage;
