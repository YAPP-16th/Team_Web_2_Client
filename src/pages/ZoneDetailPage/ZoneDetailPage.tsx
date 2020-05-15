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

  // const destinationZoneId = Number(queries.destinationZoneId);
  // const startZoneId = Number(queries.startZoneId);
  const zoneId = Number(queries.zoneId);
  const startLat = Number(queries.startLat);
  const startLng = Number(queries.startLng);
  const destinationLat = Number(queries.destinationLat);
  const destinationLng = Number(queries.destinationLng);


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
          zoneAddress="강남구 역삼1동, 서울특별시"
          zoneCode="06020"
          zoneId={zoneId}
          startLocation={{lat: startLat, lng: startLng}}
          destinationLocation={{lat: destinationLat, lng: destinationLng}}
        />
      );
      break;
    case "realestate":
      return <RealEstateContainer zoneId={zoneId} />;
      break;
    case "place":
      return <PlaceContainer zoneId={zoneId} />;
      break;
    default:
      return <div></div>;
      break;
  }
};

export default withRouter(ZoneDetailPage);
