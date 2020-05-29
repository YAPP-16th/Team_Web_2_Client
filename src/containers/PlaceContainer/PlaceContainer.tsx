import React, { useEffect, useState } from "react";
import { Place } from "../../api/places";
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
import { TagButton } from "../../components/Button/Button";
import LoadingDots from "../../components/Loading/LoadingDots";
import Icon from "../../components/Icon/Icon";

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
  @media screen and (min-width: 1060px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;

    > div > a {
      margin-bottom: 0px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 31px 37px;

      h1 {
        font-size: 24px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: -1.07px;
      }

      h2 {
        font-size: 16px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.88;
        letter-spacing: -0.71px;
      }
    }
  }
`;

const PlacesTagButtonsDraggableArea = styled.div`
  position: relative;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 3px;
  &::-webkit-scrollbar {
    height: 0px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--ItemColor);
    border-radius: 22px;
    opacity: 0.4;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  margin-bottom: 37px;
`;

const PlacesTagButtonsWrapper = styled.div`
  display: flex;
  width: 1100px;
  > div > button {
    margin-right: 8px;
  }

  .scroll-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    border-radius: 50%;
    top: 6px;
    right: 0px;
    box-shadow: 0px 0 10px 17px #1d1d1d;
    background-color: rgba(255, 255, 255);
    transform: rotate(-180deg);
    width: 20px;
    height: 20px;
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
  margin-bottom: 23px;

  @media screen and (min-width: 1060px) {
    margin-top: 70px;
    margin-bottom: 60px;
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
  margin-bottom: 9px;
  @media screen and (min-width: 1060px) {
    font-size: 18px;
    text-align: right;
    color: var(--PrimaryColor);
  }
`;

const PlaceContainer = ({ zoneId }: PlaceContainerProps) => {
  const place = usePlace();

  useEffect(() => {
    place.loadPlacesByZoneId(zoneId);
  }, []);

  const [selectedPlaceContent, setSelectedPlaceContent] = useState<Place>({
    categoryName: "",
    size: 0,
    placeVoList: [],
  });

  // Handlers
  const selectPlaceContentHandler = (item: Place) => {
    setSelectedPlaceContent(item);
  };

  // Dynamically Generated

  const placesTagButtons = place.data.map((item) => {
    return (
      <div key={item.categoryName}>     
        <TagButton
          fontSize="14px"
          onClick={() => selectPlaceContentHandler(item)}
        >
          {item.categoryName} {item.size}
        </TagButton>
      </div>
    );
  });

  const placesListItems = selectedPlaceContent.placeVoList.map((item) => {
    console.log(selectedPlaceContent.placeVoList);
    return (
      <div key={item.address}>
        <PlaceListItem
          url={item.placeUrl}
          heading={item.placeName}
          subHeading={item.address}
        />
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
        {place.loading && <LoadingDots color="white" size="15px" />}
        {place.error && (
          <p style={{ textAlign: "center", color: "white" }}>에러발생</p>
        )}
        {place.data.length !== 0 && (
          <PlacesTagButtonsWrapper>
            {placesTagButtons}
            <div className="scroll-indicator"><Icon icon="back" color="black" size="6px" /></div>
          </PlacesTagButtonsWrapper>
        )}
      </PlacesTagButtonsDraggableArea>
      <PlaceSizeText>{selectedPlaceContent.size}건의 결과</PlaceSizeText>
      <PlaceListItemsWrapper>{placesListItems}</PlaceListItemsWrapper>
    </PlaceContainerWrapper>
  );
};

export default PlaceContainer;
