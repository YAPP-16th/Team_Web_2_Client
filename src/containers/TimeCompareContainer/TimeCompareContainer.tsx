import React, { useState } from "react";
import styled from "styled-components";

// Components
import { Button } from "../../components/Button/Button";
import TimeCompareListItem from "../../components/ListViewItem/TimeCompareListItem";
import { IconType } from "../../components/Icon/Icon";

// Data Types
type ItemType = {
  icon: IconType;
  heading: string;
  savingTime: number;
  address: string;
  distanceFrom: number;
  distanceTo: number;
};

// Dummy Data
const startAddress = "서울시 마포구 431 화인빌라";
const contents: ItemType[] = [
  {
    icon: "company",
    heading: "직장까지",
    savingTime: 44,
    address: "서울 강남구 선릉로 429",
    distanceFrom: 56,
    distanceTo: 12,
  },
  {
    icon: "koex",
    heading: "코엑스까지",
    savingTime: 44,
    address: "서울 강남구 선릉로 429",
    distanceFrom: 56,
    distanceTo: 12,
  },
  {
    icon: "seoulForest",
    heading: "서울숲까지",
    savingTime: 44,
    address: "서울 강남구 선릉로 429",
    distanceFrom: 56,
    distanceTo: 12,
  },
  {
    icon: "koex",
    heading: "혜화까지",
    savingTime: 44,
    address: "서울 강남구 선릉로 429",
    distanceFrom: 56,
    distanceTo: 12,
  },
  {
    icon: "koex",
    heading: "강남까지",
    savingTime: 44,
    address: "서울 강남구 선릉로 429",
    distanceFrom: 56,
    distanceTo: 12,
  },
];

const TimeCompareContainerWrapper = styled.div`
  background-color: var(--BackgroundColor);
  padding: 30px 20px;
  @media screen and (min-width: 1060px) {
    width: 1120px;
    margin: auto;
  }
`;

const TextSectionWrapper = styled.div`
  @media screen and (min-width: 1060px) {
    margin-top: 80px;
  }
`;

const BoldText = styled.h1`
  color: var(--LightTextColor);
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.98px;

  @media screen and (min-width: 1060px) {
    font-size: 32px;
  }
`;

const StartPositionSelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 33px;

  @media screen and (min-width: 1060px) {
    justify-content: flex-end;
    position: relative;
    top: -40px;
  }
`;

const PlainText = styled.h2`
  color: var(--DarkTextColor);
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.29;
  letter-spacing: -0.62px;

  @media screen and (min-width: 1060px) {
    margin-right: 34px;
  }
`;

const TimeCompareList = styled.div`
  > div {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1060px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 1fr));
    grid-gap: 18px;

    .timecompare-item {
      height: 270px;
      > :nth-child(1) {
        flex-direction: column;
        > :nth-child(1) {
          align-self: flex-start;
        }
        > :nth-child(2) {
          position: relative;
          top: 150px;
          font-size: 30px;
          align-self: flex-end; 
        }
      }
      > :nth-child(2) {
        position: relative;
        top: -30px;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;

// .timecompare-item {
    //   display: flex;
    //   height: 296px;
    //   flex-direction: column;
    //   justify-content: space-between;
    // }

const timeCompareList = contents.map((content) => {
  return (
    <TimeCompareListItem
      className="timecompare-item"
      icon={content.icon}
      heading={content.heading}
      savingTime={content.savingTime}
      address={content.address}
      distanceFrom={content.distanceFrom}
      distanceTo={content.distanceTo}
    />
  );
});

const TimeCompareContainer = () => {
  return (
    <TimeCompareContainerWrapper>
      <TextSectionWrapper>
        <BoldText>지금보다</BoldText>
        <BoldText>얼마나 많은 시간이</BoldText>
        <BoldText>절약될까요?</BoldText>
      </TextSectionWrapper>

      <StartPositionSelectWrapper>
        <PlainText>{startAddress}</PlainText>
        <Button>수정</Button>
      </StartPositionSelectWrapper>
      <TimeCompareList>{timeCompareList}</TimeCompareList>
    </TimeCompareContainerWrapper>
  );
};

export default TimeCompareContainer;
