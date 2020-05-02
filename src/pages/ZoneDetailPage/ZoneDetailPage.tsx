import React from "react";
import "./ZoneDetailPage.scss";
import {
  withRouter,
  RouteComponentProps,
} from "react-router-dom";

//Containers
import RealEstateContainer from "../../containers/RealEstateContainer/RealEstateContainer";
import TimeCompareContainer from "../../containers/TimeCompareContainer/TimeCompareContainer";
import TransportationContainer from "../../containers/TransportationContainer/TransportationContainer";

type paramsType = {
  id: string;
  feature: string;
};

const ZoneDetailPage = ({
  match
}: RouteComponentProps<paramsType>) => {

  switch (match.params.feature) {
    case "timecompare":
      return <TimeCompareContainer />;
      break;
    case "transportation":
      return <TransportationContainer />;
      break;
    case "realestate":
      return <RealEstateContainer />;
      break;
    default:
      return <div></div>;
      break;
  }
};

export default withRouter(ZoneDetailPage);
