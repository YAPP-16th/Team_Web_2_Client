import React from "react";
import styled from "styled-components";

// Icon
import Icon from "../Icon/Icon";

type CurrentItemInfoProps = {
  address: string | number;
  zoneCode: string | number;
  className?: string;
};

const CurrentItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

const Address = styled.h1`
  font-family: NotoSansRegular;
  color: var(--LightTextColor);
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.71px;
  margin-bottom: 13px;
`;

const ZoneCode = styled.h2`
  display: inline-block;
  padding: 6px 27px;
  border-radius: 22px;
  color: var(--LightTextColor);
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: -0.8px;
  background-color: var(--ItemColor);
  margin-bottom: 23px;
`;

const CurrentItemInfo = ({
  address,
  zoneCode,
  className
}: CurrentItemInfoProps) => {
  return (
    <CurrentItemInfoWrapper className={className}>
      <Address>{address}</Address>
      <ZoneCode>ZONE {zoneCode}</ZoneCode>
    </CurrentItemInfoWrapper>
  );
};

export default CurrentItemInfo;
