import React from "react";
import {
  useLocation,
} from "react-router-dom";

// Page
import ZoneSearchResultPage from "../ZoneSearchResultPage/ZoneSearchResultPage";

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
    <div>여기는 검색 페이지 넣어야함</div>
  );
};

export default ZoneSearchPage;
