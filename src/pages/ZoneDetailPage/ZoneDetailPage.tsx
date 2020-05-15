import React from "react";
import "./ZoneDetailPage.scss";
import { withRouter, RouteComponentProps } from "react-router-dom";
import queryString from "query-string";

//Containers
import RealEstateContainer from "../../containers/RealEstateContainer/RealEstateContainer";
import TimeCompareContainer from "../../containers/TimeCompareContainer/TimeCompareContainer";
import TransportationContainer from "../../containers/TransportationContainer/TransportationContainer";
import PlaceContainer from "../../containers/PlaceContainer/PlaceContainer";

type paramsType = {
  id: string;
  feature: string;
};

const ZoneDetailPage = ({
  match,
  location,
  history,
  staticContext,
}: RouteComponentProps<paramsType>) => {
  const queries = queryString.parse(window.location.search);

  const zoneId = Number(queries.zoneId);
  const lat = Number(queries.lat);
  const lng = Number(queries.lng);

  switch (match.params.feature) {
    case "timecompare":
      return (
        <TimeCompareContainer
          currentZoneId={zoneId}
          startAddress="서울시 마포구 431 화인빌라"
        />
      );
      break;
    case "transportation":
      return (
        <TransportationContainer
          queries={{ zoneId, lat, lng }}
          zoneAddress="강남구 역삼1동, 서울특별시"
          zoneCode="06020"
        />
      );
      break;
    case "realestate":
      return <RealEstateContainer zoneId={zoneId} />;
      break;
    case "place":
      return <PlaceContainer />;
      break;
    default:
      return <div></div>;
      break;
  }
};

export default withRouter(ZoneDetailPage);
