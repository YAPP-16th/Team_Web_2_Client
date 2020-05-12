import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useTransit from '../../hooks/transitHooks'
import { TransitQuery } from '../../api/transits'

// Components
import TransportationListItem from "../../components/ListViewItem/TransportationListItem";
import { TagButton } from "../../components/Button/Button";

const TransportationContainerWrapper = styled.div`
  background-color: var(--BackgroundColor);
  padding: 30px 20px;

  @media screen and (min-width: 1060px) {
    width: 1120px;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

const PathArea = styled.div`
  position: relative;
`;

const Heading = styled.h1`
  @media screen and (min-width: 1060px) {
    display: none;
  }
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
  &:after {
    content: "";
    position: absolute;
    margin-left: 10px;
    margin-top: 10px;
    left: 10px;
    border-radius: 50%;
    background-color: var(--GreyTextColor);
    width: 8px;
    height: 8px;
  }
`;

const PathItemsWrapper = styled.div`
  @media screen and (min-width: 1060px) {
    display: none;
  }
  margin: 14px 24px 0px 24px;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  > span:first-child {
    margin-bottom: 16px;
  }

  &:after {
    content: "";
    position: absolute;
    border-left: 0.1px solid var(--GreyTextColor);
    height: 40px;
    left: 24px;
    top: 60px;
  }
`;

const TransportationItemsWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1060px) {
    margin-top: 30px;
  }
`;

const ZoneCode = styled.h1`
  @media screen and (min-width: 1060px) {
    display: none;
  }
  color: var(--GreyTextColor);
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.71px;
  padding-left: 50px;
  margin-bottom: 10px;
`;

const TagButtonsWrapper = styled.div`
  display: flex;
  padding-left: 45px;
  margin-bottom: 41px;
  > button {
    margin-right: 13px;
    margin-bottom: 18px;
  }
  @media screen and (min-width: 1060px) {
    flex-wrap: wrap;
    width: 300px;
    padding-left: 0px;
    margin-top: 90px;
  }
`;

const DesktopHeading = styled.h1`
  display: none;
  margin-top: 70px;
  margin-bottom: 30px;
  @media screen and (min-width: 1060px) {
    display: block;
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: -1.43px;
    color: var(--LightTextColor);
  }
`;

const DesktopSubHeading = styled.h3`
  display: none;
  @media screen and (min-width: 1060px) {
    display: block;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: -0.8px;
    color: var(--GreyTextColor);
  }
`;

// not 이 안먹히나 styled components에서는?

const TransportationArea = styled.div`
  @media screen and (min-width: 1060px) {
    margin-top: 120px;
  }
`;

const TransportationContainer = ({ zoneId, lat, lng }: TransitQuery) => {

  const transit = useTransit();

  useEffect(() => {
    transit.loadTransitsByQueries({ zoneId, lat, lng })
  }, []);

  const transitData = transit.data;


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
    { text: "#회사" },
    { text: "#BUS" },
    { text: "#10-20m" },
  ];

  const transportationContents = [
    { transportationInfo: "641 Bus", time: 14, transfer: 2 },
    { transportationInfo: "614 Bus", time: 12, transfer: 2 },
    { transportationInfo: "312 Bus", time: 11, transfer: 3 },
    { transportationInfo: "121 Bus", time: 16, transfer: 1 },
  ];
  const pathItems = pathContents.map((content) => {
    return <PathItem>{content.address}</PathItem>;
  });

  const transportationItems = transportationContents.map((content) => {
    return (
      <TransportationListItem
        transportationInfo={content.transportationInfo}
        time={content.time}
        transfer={content.transfer}
      />
    );
  });

  const tagButtons = tagButtonContents.map((content) => {
    return <TagButton fontSize="14px">{content.text}</TagButton>;
  });

  return (
    <TransportationContainerWrapper>
      <PathArea>
        <Heading>경로</Heading>
        <PathItemsWrapper>{pathItems}</PathItemsWrapper>
        <ZoneCode>:ZONE {zoneCode}</ZoneCode>
        <DesktopHeading>
          보다 만족스러운 <br />
          출퇴근길을 위해서
        </DesktopHeading>
        <DesktopSubHeading>
          선택했던 옵션을 바탕으로 <br /> 새로운 교통편을 안내해드릴게요.{" "}
        </DesktopSubHeading>
        <TagButtonsWrapper>{tagButtons}</TagButtonsWrapper>
      </PathArea>
      <TransportationArea>
        <Heading>{selectedTransportation}</Heading>
        <DesktopSubHeading>새로운 교통편</DesktopSubHeading>
        <TransportationItemsWrapper>
          {transportationItems}
        </TransportationItemsWrapper>
      </TransportationArea>
    </TransportationContainerWrapper>
  );
};

export default TransportationContainer;
