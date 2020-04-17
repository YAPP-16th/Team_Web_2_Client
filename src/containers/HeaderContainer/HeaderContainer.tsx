import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Toolbar from "../../components/Toolbar/Toolbar";
import HeaderInfo from "../../components/HeaderInfo/SearchResultInfo";

// Dummy Data
const ItemCount = 17;

const HeaderContainer = () => {
  return (
    <>
      <Toolbar />
      <HeaderInfo ItemCount={ItemCount} />
    </>
  );
};

export default HeaderContainer;
