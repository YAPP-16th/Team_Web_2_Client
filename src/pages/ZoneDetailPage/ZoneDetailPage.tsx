import React from "react";
import "./ZoneDetailPage.scss";
import { withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

//Containers
import RealEstateContainer from "../../containers/RealEstateContainer/RealEstateContainer";
import TimeCompareContainer from "../../containers/TimeCompareContainer/TimeCompareContainer";
import TransportationContainer from "../../containers/TransportationContainer/TransportationContainer";

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
        <TabItem to={section.to} testId={section.to}>{section.name}</TabItem>
      </div>
    );
  });

  switch (match.params.feature) {
    case "timecompare":
      container = <TimeCompareContainer />;
      break;
    case "transportation":
      container = <TransportationContainer />;
      break;
    case "realestate":
      container = <RealEstateContainer />;
      break;
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
