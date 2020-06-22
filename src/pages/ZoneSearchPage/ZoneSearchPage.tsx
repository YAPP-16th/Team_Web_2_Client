import React from "react";
import { Switch, HashRouter, Route } from "react-router-dom"
import {
  useLocation,
} from "react-router-dom";

// Page
import ZoneSearchResultPage from "../ZoneSearchResultPage/ZoneSearchResultPage";
import SearchInputPage from "../SearchInputPage/SearchInputPage";

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
    <SearchInputPage/>
  )
};

export default ZoneSearchPage;
