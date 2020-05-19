import React from "react";
import styled from "styled-components";

export type PlaceListItemProps = {
  heading: string;
  subHeading: string;
};

const PlaceListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px 18px;
  background-color: var(--ItemColor);
  border-radius: 8px;
`;

const PlaceListItemHeading = styled.h1`
  color: var(--LightTextColor);
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
`;

const PlaceListItemDescription = styled.h2`
  color: var(--GreyTextColor);
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.62px;
`;

const PlaceListItem = ({ heading, subHeading }: PlaceListItemProps) => {
  return (
    <PlaceListItemWrapper>
      <PlaceListItemHeading>{heading}</PlaceListItemHeading>
      <PlaceListItemDescription>{subHeading}</PlaceListItemDescription>
    </PlaceListItemWrapper>
  );
};

export default PlaceListItem;
