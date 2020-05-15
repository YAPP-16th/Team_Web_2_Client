import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useTransit from "../../hooks/transitHooks";
import { Transit, TransitQuery } from "../../api/transits";

// Components
import TransportationListItem from "../../components/ListViewItem/TransportationListItem";
import { TagButton } from "../../components/Button/Button";
import LoadingDots from "../../components/Loading/LoadingDots";

type TransportationContainerProps = {
  zoneCode: string | number;
  zoneAddress: string;
  queries: TransitQuery;
};

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

const TransportationContainer = ({
  zoneCode,
  zoneAddress,
  queries: { zoneId, lat, lng },
}: TransportationContainerProps) => {
  const transit = useTransit();

  const [selectedTransit, setSelectTransit] = useState({
    transitObj: {
      firstStation: "",
      firstStationLine: 0,
      transitCount: "",
      vehicleTypes: ["버스"],
      time: 0,
    },
  });

  useEffect(() => {
    transit.loadTransitsByQueries({ zoneId, lat, lng });
  }, []);

  const transportationContents = transit.data.map((data) => {
    let transportationInfo = data.vehicleTypes[0] + " " + data.firstStationLine;
    if (data.vehicleTypes.length > 1) {
      for (let i = 1; i < data.vehicleTypes.length; i++) {
        transportationInfo += " + " + data.vehicleTypes[i];
      }
    }
    return {
      transportationInfo: transportationInfo,
      time: data.time,
      transfer: data.transitCount,
    };
  });

  const tagButtonContents = [
    { text: "#회사" },
    { text: "#BUS" },
    { text: "#10-20m" },
  ];

  // Item Components
  const transportationItems = transportationContents.map((content) => {
    return (
      <div key={content.transportationInfo}>
        <TransportationListItem
          transportationInfo={content.transportationInfo}
          time={content.time}
          transfer={content.transfer}
        />
      </div>
    );
  });

  const tagButtons = tagButtonContents.map((content) => {
    return <TagButton fontSize="14px">{content.text}</TagButton>;
  });

  // Handlers
  const selectTransitHandler = (transitObj: Transit) => {
    const selectedIndex = transit.data.findIndex(
      (item) =>
        item.firstStation === transitObj.firstStation &&
        item.firstStationLine === transitObj.firstStationLine
    );
    if (selectedIndex !== -1) {
      const processed = { ...selectedTransit };
      processed.transitObj = transitObj;
      setSelectTransit(processed);
    }
  };

  return (
    <>
      {transit.error && "에러가 발생했습니다"}
      <TransportationContainerWrapper>
        <PathArea>
          <Heading>경로</Heading>
          <PathItemsWrapper>
            <PathItem>{selectedTransit.transitObj.firstStation}</PathItem>
            <PathItem>{zoneAddress}</PathItem>
          </PathItemsWrapper>
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
          <Heading>실시간 교통편</Heading>
          <DesktopSubHeading>실시간 교통편</DesktopSubHeading>
          <TransportationItemsWrapper>
            {transit.loading && <LoadingDots color="white" size="15px" />}
            {transit.data.length !== 0 ? (
              transportationItems
            ) : (
              <p
                style={{
                  textAlign: "center",
                  color: "white",
                  display: transit.loading ? "none" : "block",
                }}
              >
                교통편이 없습니다
              </p>
            )}
          </TransportationItemsWrapper>
        </TransportationArea>
      </TransportationContainerWrapper>
    </>
  );
};

export default TransportationContainer;
