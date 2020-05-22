import React from "react";
import { useLocation } from "react-router-dom";

//Containers
import DefaultHeaderContainer from "../../containers/HeaderContainer/DefaultHeaderContainer";
import ZoneDetailHeaderContainer from "../../containers/HeaderContainer/ZoneDetailHeaderContainer";

const HeaderPage = () => {
  const location = useLocation();
  let HeaderContainer;

  if (location.hash.includes("/zone/")) {
    HeaderContainer = ZoneDetailHeaderContainer;
  } else {
    HeaderContainer = DefaultHeaderContainer;
  }

  return <HeaderContainer />;
};

export default HeaderPage;
