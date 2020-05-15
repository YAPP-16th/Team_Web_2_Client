import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  Link,
  HashRouter,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";

// Custom Hooks
import usePlace from '../../hooks/placeHooks';

// Components
import PlaceListItem from '../../components/ListViewItem/PlaceListItem';

// Type
type PlaceContainerProps = {
  zoneId: number;
}

const PlaceContainerWrapper = styled.div`
  height: 1000px;
  @media screen and (min-width: 1060px) {
    width: 1120px;
    margin: auto;
  }
`

const PlaceListItemsWrapper = styled.div`
`

const PlaceContainer = ({zoneId}: PlaceContainerProps) => {

  const place = usePlace();

  useEffect(() => {
    place.loadPlacesByZoneId(zoneId);
  }, []);

  console.log(place.data);

  const placesListItems = place.data.map(item => {
    return <div key={item.categoryName}>
      <PlaceListItem />
    </div>;
  })

  return <PlaceContainerWrapper>PlaceContainer</PlaceContainerWrapper>
}

export default PlaceContainer;
