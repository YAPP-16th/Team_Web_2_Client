import React from "react";
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

type paramsType = {
  id: string;
  feature: string;
};

const address = "강남구 역삼1동, 서울특별시";
const zoneCode = 301421;
const sections = [
  { name: "시간비교", to: "timecompare" },
  { name: "교통편", to: "transportation" },
  { name: "매물", to: "realestate" },
];

const StickyTabs = styled.div`
  display: flex;
  > * {
    flex: 1;
  }
`;

const ZoneDetailPage = ({ match }: RouteComponentProps<paramsType>) => {
  let container = <div></div>;
  const tabItems = sections.map((section) => {
    return (
      <div key={section.name}>
        <TabItem to={section.to} testId={section.to}>
          {section.name}
        </TabItem>
      </div>
    );
  });

  const queries = queryString.parse(window.location.search);
  const zoneId = Number(queries.zoneId);
  const startLat = Number(queries.startLat);
  const startLng = Number(queries.startLng);
  const destinationLat = Number(queries.destinationLat);
  const destinationLng = Number(queries.destinationLng);

  let ZoneDetailContainer;

  switch (match.params.feature) {
    case "timecompare":
      ZoneDetailContainer = () => (
        <TimeCompareContainer
          currentZoneId={zoneId}
          startAddress="서울시 마포구 431 화인빌라"
        />
      );
      break;
    case "transportation":
      ZoneDetailContainer = () => (
        <TransportationContainer
          zoneAddress="강남구 역삼1동, 서울특별시"
          zoneCode="06020"
          zoneId={zoneId}
          startLocation={{ lat: startLat, lng: startLng }}
          destinationLocation={{ lat: destinationLat, lng: destinationLng }}
        />
      );
      break;
    case "realestate":
      ZoneDetailContainer = () => <RealEstateContainer zoneId={zoneId} />;
      break;
    case "place":
      ZoneDetailContainer = () => <PlaceContainer zoneId={zoneId} />;
    default:
      break;
  }

  return (
    <>
      <ZoneDetailHeaderInfo
        className="header-info"
        address={address}
        zoneCode={zoneCode}
      />
      <StickyTabs className="header-tabs">{tabItems}</StickyTabs>
      {container}
    </>
  );
};

export default withRouter(ZoneDetailPage);
