import React, { useEffect, useState } from "react";
import { Place } from "../../api/places";
import { TagButton } from "../../components/Button/Button";
import styled from "styled-components";
import {
  Link,
  HashRouter,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";

// Custom Hooks
import usePlace from "../../hooks/placeHooks";

// Components
import PlaceListItem from "../../components/ListViewItem/PlaceListItem";

// Type
type PlaceContainerProps = {
  zoneId: number;
};

const PlaceContainerWrapper = styled.div`
  padding: 30px 20px;
  @media screen and (min-width: 1060px) {
    width: 1120px;
    margin: auto;
  }
`;

const PlaceListItemsWrapper = styled.div`
  > div {
    margin-bottom: 8px;
  }
`;

const PlacesTagButtonsDraggableArea = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-bottom: 40px;
`;

const PlacesTagButtonsWrapper = styled.div`
  display: flex;
  width: 1020px;
  > button {
    margin-right: 8px;
  }
`;

const Heading = styled.h1`
  color: var(--LightTextColor);
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.98px;
  margin-bottom: 10px;
  margin-bottom: 23px;

  @media screen and (min-width: 1060px) {
    margin-top: 70px;
    margin-bottom: 30px;
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: -1.43px;
    color: var(--LightTextColor);
  }
`;

const PlaceSizeText = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.71px;
  color: var(--DarkTextColor);
`;

const PlaceContainer = ({ zoneId }: PlaceContainerProps) => {
  const place = usePlace();

  const [selectedPlaceContent, setSelectedPlaceContent] = useState<Place>({
    categoryName: "",
    size: 0,
    placeVoList: [],
  });

  useEffect(() => {
    place.loadPlacesByZoneId(zoneId);
  }, []);

  console.log(place.data);

  // Handlers
  const selectPlaceContentHandler = (item: Place) => {
    setSelectedPlaceContent(item);
  };

  // Dynamically Generated

  const placesTagButtons = place.data.map((item) => {
    return (
      <TagButton
        fontSize="14px"
        onClick={() => selectPlaceContentHandler(item)}
      >
        {item.categoryName} {item.size}
      </TagButton>
    );
  });

  const placesListItems = selectedPlaceContent.placeVoList.map((item) => {
    return (
      <div key={item.categoryName}>
        <PlaceListItem heading={item.placeName} subHeading={item.address} />
      </div>
    );
  });

  return (
    <PlaceContainerWrapper>
      <Heading>
        주변 시설을
        <br />
        확인해보세요.
      </Heading>
      <PlacesTagButtonsDraggableArea>
        <PlacesTagButtonsWrapper>{placesTagButtons}</PlacesTagButtonsWrapper>
      </PlacesTagButtonsDraggableArea>
      <PlaceSizeText>
        { selectedPlaceContent.size }건의 결과
      </PlaceSizeText>
      <PlaceListItemsWrapper>{placesListItems}</PlaceListItemsWrapper>
    </PlaceContainerWrapper>
  );
};

export default PlaceContainer;
