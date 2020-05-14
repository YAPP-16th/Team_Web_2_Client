import React from "react";
import styled from "styled-components";

// Components
import Icon, { IconType } from "../Icon/Icon";
import { Button } from '../Button/Button';

// type
export type TimeCompareListItemProps = {
  icon: IconType;
  heading: string;
  savingTime: string | number;
  address: string;
  distanceFrom: string | number;
  distanceTo: string | number;
  className?: string;
  editMode?: boolean;
  location?: {
    lat: number,
    lng: number
  }
};

const TimeCompareListItemWrapper = styled.div`
  border-radius: 8px;
  background-color: var(--ItemColor);
  padding: 19px 22px;
`;

const HeadingAndIcon = styled.div`
  display: flex;
  align-items: center;
`

const Heading = styled.h1`
  color: var(--LightTextColor);
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
  margin-left: 12px;
`;

const SavingTime = styled.span`
  color: var(--LightTextColor);
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
`;

const Address = styled.span`
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.29;
  letter-spacing: -0.62px;
  color: var(--DarkTextColor);
`;

const Distance = styled.span`
  color: var(--DarkTextColor);

  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditableItemWrapper = styled.div`

`;

const EditableHeading = styled.input`

`;

const TimeCompareListItem = ({
  icon,
  heading,
  savingTime,
  address,
  distanceFrom,
  distanceTo,
  className,
  editMode
}: TimeCompareListItemProps) => {
  return (
    <TimeCompareListItemWrapper className={className}>
      <ContentRow>
        <HeadingAndIcon>
          <Icon icon={icon} />
          <Heading>{heading}</Heading>
        </HeadingAndIcon>
        <SavingTime>{savingTime}분 절약</SavingTime>
      </ContentRow>
      <ContentRow>
        <Address>{address}</Address>
        <Distance>
          {distanceFrom} -> {distanceTo}
        </Distance>
      </ContentRow>
    </TimeCompareListItemWrapper>
  );
};

TimeCompareListItem.defaultProps = {
  editMode: false
}

export default TimeCompareListItem;
