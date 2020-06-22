import React from "react";
import { useLocation } from "react-router-dom";
import './HeaderPage.scss';

//Containers
import DefaultHeaderContainer from "../../containers/HeaderContainer/DefaultHeaderContainer";
import ZoneDetailHeaderContainer from "../../containers/HeaderContainer/ZoneDetailHeaderContainer";
import InputHeaderContainer from "../../containers/HeaderContainer/InputHeaderContainer";

const HeaderPage = () => {
  const location = useLocation();
  let HeaderContainer;

  if (location.hash.includes("/zone/")) {
    HeaderContainer = ZoneDetailHeaderContainer;
  } else {
    if (location.pathname === "/") {
      HeaderContainer = () => <DefaultHeaderContainer displayLogo={false} />;
    } if (location.pathname === "/search") {
      HeaderContainer = () => <InputHeaderContainer displayLogo />;
    } else {
      HeaderContainer = () => <DefaultHeaderContainer displayLogo />;
    }
  }


  const isLanding = location.pathname === '/' ? "fixed" : "initial";

  return (
    <div className="header" style={{ position: isLanding }}>
      <HeaderContainer />
    </div>
  )
}

export default HeaderPage;
