import React, { MouseEvent } from "react";
import styled, { keyframes } from "styled-components";
import {
  Link,
  HashRouter,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";

// Custom Hooks

// Components


// Type
type PlaceContainerProps = {

}

const PlaceContainerWrapper = styled.div`
  height: 1000px;
  @media screen and (min-width: 1060px) {
    width: 1120px;
    margin: auto;
  }
`


const PlaceContainer = ({}: PlaceContainerProps) => {
  return <PlaceContainerWrapper>PlaceContainer</PlaceContainerWrapper>
}

export default PlaceContainer;
