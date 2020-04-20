import React, { useState } from "react";
import styled from "styled-components";

// Components
import { Button } from "../../components/Button/Button";
import TimeCompareListItem from "../../components/ListViewItem/TimeCompareListItem";
import { IconType } from '../../components/Icon/Icon';

// Data Types
type ItemType = {
  icon: IconType;
  heading: string;
  savingTime: number;
  address: string;
  distanceFrom: number;
  distanceTo: number;
}

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
`;

const BoldText = styled.h1`
  color: var(--LightTextColor);
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.98px;
`;

const StartPositionSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 33px;
`;

const PlainText = styled.h2`
  color: var(--DarkTextColor);
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.29;
  letter-spacing: -0.62px;
`;

const TimeCompareList = styled.div`
  > div {
    margin-bottom: 12px;
  }
`;

const timeCompareList = contents.map((content) => {
  return (
    <TimeCompareListItem
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
      <BoldText>지금보다</BoldText>
      <BoldText>얼마나 많은 시간이</BoldText>
      <BoldText>절약될까요</BoldText>
      <StartPositionSelect>
        <PlainText>{startAddress}</PlainText>
        <Button>수정</Button>
      </StartPositionSelect>
      <TimeCompareList>{timeCompareList}</TimeCompareList>
    </TimeCompareContainerWrapper>
  );
};

export default TimeCompareContainer;
