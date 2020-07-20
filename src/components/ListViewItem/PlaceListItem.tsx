import React from 'react';
import styled from 'styled-components';

export type PlaceListItemProps = {
  heading: string;
  subHeading: string;
  url: string;
};

const PlaceListItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  padding: 17px 18px;
  background-color: var(--ItemColor);
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

const PlaceListItemHeading = styled.h1`
  color: var(--LightTextColor);
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
  margin-right: 40px;
`;

const PlaceListItemDescription = styled.h2`
  color: var(--DarkTextColor);
  font-family: NotoSansDemiLight;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.62px;
`;

const PlaceListItem = ({ heading, subHeading, url }: PlaceListItemProps) => {
  return (
    <PlaceListItemWrapper href={url} target="blank">
      <PlaceListItemHeading>{heading}</PlaceListItemHeading>
      <PlaceListItemDescription>{subHeading}</PlaceListItemDescription>
    </PlaceListItemWrapper>
  );
};

export default PlaceListItem;
