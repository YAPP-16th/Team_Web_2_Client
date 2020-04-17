import React from "react";
import styled from "styled-components";

// Icon
import Icon from '../Icon/Icon';

type CurrentItemInfoProps = {
  AddressInfo: string | number;
  ZoneCodeInfo: string | number;
};

const CurrentItemInfoWrapper = styled.div``;

const InfoHeader = styled.div`

`;

const InfoBody = styled.div`

`

const ZoneDescription = styled.h1`

`

const ZoneCode = styled.h2`

`


const CurrentItemInfo = ({ AddressInfo, ZoneCodeInfo }: CurrentItemInfoProps) => {
  return <CurrentItemInfoWrapper>
    <InfoHeader></InfoHeader>
    <InfoBody>
      <ZoneDescription></ZoneDescription>
      <ZoneCode></ZoneCode>
    </InfoBody>
  </CurrentItemInfoWrapper>;
};

export default CurrentItemInfo;
