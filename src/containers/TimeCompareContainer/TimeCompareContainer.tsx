import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import { Button } from "../../components/Button/Button";
import TimeCompareListItem, { TimeCompareListItemProps } from "../../components/ListViewItem/TimeCompareListItem";
import { IconType } from "../../components/Icon/Icon";

// Utils
import { setDefaultTimeCompareItem, addTimeCompareItem, updateTimeCompareItem, delteTimeCompareItem, getTimeCompareItems, TimeCompareItem } from '../../utils/TimeCompare/functions';

// Data Types
type TimeCompareContainerProps = {
  startAddress: string;
};

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
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
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

const ItemAddButton = styled.a`
  cursor: pointer;
  display: block;
  background: none;
  width: 100%;
  padding: 15px 22px;
  border-radius: 8px;
  text-align: left;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
  border: 2px solid var(--ItemColor);
  color: var(--DarkTextColor);
  margin-top: 12px;
  transition: all 0.5s;

  &:hover {
    border-color: var(--LightItemColor);
    color: var(--LightTextColor);
    opacity: 0.5;
  }

  @media screen and (min-width: 1060px) {
    margin-top: 0px;
    font-size: 22px;
    padding: 33px 37px;
    height: 270px;
  }
`;

const TimeCompareContainer = ({ startAddress }: TimeCompareContainerProps) => {
  const [timeCompareContents, setTimeCompareContents] = useState<TimeCompareListItemProps[]>([]);

  useEffect(() => {
    let timeCompareItems: any = getTimeCompareItems();

    /** 지금 currentZoneId 와 selectedZoneId 는 Dummy 입니다*/ 
    if (timeCompareItems === null) {
      setDefaultTimeCompareItem(3200, 3600).then(() => {
        if (timeCompareItems !== null) {
          // timeCompareItems 가 null 일수 없는 상황이라서 any를 썼습니다
          timeCompareItems = getTimeCompareItems();
          setTimeCompareContents(timeCompareItems);
        }
      }).catch(err => {
        console.log(err);
      });
    } else {
      setTimeCompareContents(timeCompareItems);
    }
  }, []);

  const timeCompareList = timeCompareContents.map((content) => {
    return (
      <TimeCompareListItem
        className="timecompare-item"
        icon={content.icon}
        heading={content.heading}
        savingTime={content.savingTime}
        address={content.address}
        distanceFrom={content.distanceFrom}
        distanceTo={content.distanceTo}
        editMode={content.editMode}
      />
    );
  });

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
      <TimeCompareList>
        {timeCompareList}
        <ItemAddButton>+ 추가하기</ItemAddButton>
      </TimeCompareList>
    </TimeCompareContainerWrapper>
  );
};

export default TimeCompareContainer;
