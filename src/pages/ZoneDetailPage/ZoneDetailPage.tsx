import React, { useState } from "react";
import "./ZoneDetailPage.scss";
import { withRouter, RouteComponentProps } from "react-router-dom";
import queryString from "query-string";
import styled from "styled-components";

//Containers
import RealEstateContainer from "../../containers/RealEstateContainer/RealEstateContainer";
import TimeCompareContainer from "../../containers/TimeCompareContainer/TimeCompareContainer";
import TransportationContainer from "../../containers/TransportationContainer/TransportationContainer";
import PlaceContainer from "../../containers/PlaceContainer/PlaceContainer";

import ZoneDetailHeaderInfo from "../../components/ZoneInfo/CurrentItemInfo";
import TabItem from "../../components/TabItem/TabItem";

type ZoneDetailPageProps = {
  startLng: number;
  startLat: number;
}

type paramsType = {
  id: string;
  feature: string;
};

const address = "강남구 역삼1동, 서울특별시";
const zoneCode = 301421;
const sections = [
  { name: "시간비교", to: "timecompare" },
  { name: "주거환경", to: "place" },
  { name: "교통편", to: "transportation" },
  { name: "매물", to: "realestate" },
];

const StickyTabs = styled.div`
  display: flex;
  > * {
    flex: 1;
  }
`;

const ZoneDetailPage = ({ startLng, startLat, match }: ZoneDetailPageProps & RouteComponentProps<paramsType>) => {
  const hashes = window.location.hash.split('/');
  const [ zoneId, setZoneId ] = useState(Number(hashes[2]));

  let container = <div></div>;
  const tabItems = sections.map((section) => {
    return (
      <div key={section.name}>
        <TabItem to={`${zoneId}/${section.to}`} testId={section.to}>
          {section.name}
        </TabItem>
      </div>
    );
  });

  switch (match.params.feature) {
    case "timecompare":
      container = (
        <TimeCompareContainer
          currentZoneId={zoneId}
          startAddress="서울시 마포구 431 화인빌라"
        />
      );
      break;
    case "transportation":
      container = (
        <TransportationContainer
          zoneAddress="강남구 역삼1동, 서울특별시"
          zoneCode="06020"
          zoneId={zoneId}
          startLocation={{ lat: startLat, lng: startLng }}
        />
      );
      break;
    case "realestate":
      container = <RealEstateContainer zoneId={zoneId} />;
      break;
    case "place":
      container = <PlaceContainer zoneId={zoneId} />;
      break;
  }

  return (
    <div className="zone-detail-page">
      <ZoneDetailHeaderInfo
        className="header-info"
        address={address}
        zoneCode={zoneCode}
      />
      <StickyTabs className="header-tabs">{tabItems}</StickyTabs>
      {container}
    </div>
  );
};

export default withRouter(ZoneDetailPage);
