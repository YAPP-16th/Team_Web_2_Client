import React, { useState } from "react";
import styled from "styled-components";

// Components
import TransportationListItem from "../../components/ListViewItem/TransportationListItem";
import { TagButton } from "../../components/Button/Button";

// Dummy Data
const selectedTransportation = "Bus";
const zoneCode = 65323;

const pathContents = [
  { address: "서울 강남구 선릉로 429" },
  { address: "서울 강남구 역삼 1동" },
];

const tagButtonContents = [
  { text: "회사" },
  { text: "BUS" },
  { text: "10-20m" },
];

const transportationContents = [
  { transportationInfo: "641 Bus", time: 14, transfer: 2 },
  { transportationInfo: "614 Bus", time: 12, transfer: 2 },
  { transportationInfo: "312 Bus", time: 11, transfer: 3 },
  { transportationInfo: "121 Bus", time: 16, transfer: 1 },
];

const TransportationContainerWrapper = styled.div`
  background-color: var(--BackgroundColor);
  padding: 30px 20px;
`;

const PathArea = styled.div`
  margin-bottom: 41px;
`;

const Heading = styled.h1`
  color: var(--LightTextColor);
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.98px;
`;

const PathItem = styled.span`
  color: var(--GreyTextColor);
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.71px;
`;

const PathItemsWrapper = styled.div`
  margin: 14px 24px;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  border-left: 0.1px solid var(--GreyTextColor);
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const pathItems = pathContents.map((content) => {
  return <PathItem>{content.address}</PathItem>;
});

const TransportationItemsWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 10px;
  }
`;

// :not(:last-child) {
//   margin-bottom: 16px;
// }

const transportationItems = transportationContents.map((content) => {
  return (
    <TransportationListItem
      transportationInfo={content.transportationInfo}
      time={content.time}
      transfer={content.transfer}
    />
  );
});

const ZoneCode = styled.h1`
  color: var(--GreyTextColor);
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.71px;
`;

const TagButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

// not 이 안먹히나 styled components에서는?

const tagButtons = tagButtonContents.map((content) => {
  return <TagButton>{content.text}</TagButton>;
});

const TransportationArea = styled.div``;

const TransportationContainer = () => {
  return (
    <TransportationContainerWrapper>
      <PathArea>
        <Heading>경로</Heading>
        <PathItemsWrapper>
          {pathItems}
          <ZoneCode>:ZONE {zoneCode}</ZoneCode>
        </PathItemsWrapper>
        
        <TagButtonsWrapper>
          {tagButtons}
        </TagButtonsWrapper>
      </PathArea>
      <TransportationArea>
        <Heading>{selectedTransportation}</Heading>
        <TransportationItemsWrapper>
          {transportationItems}
        </TransportationItemsWrapper>
      </TransportationArea>
    </TransportationContainerWrapper>
  );
};

export default TransportationContainer;
