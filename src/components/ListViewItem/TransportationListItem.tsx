import React from 'react';
import styled from 'styled-components';

type TransportationItemProps = {
  transportationInfo: string | number;
  time: string | number;
  transfer: string | number;
};

const TransportationItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px 23px;
  background-color: var(--ItemColor);
  border-radius: 8px;
`;

const TransportationItemHeading = styled.h1`
  color: var(--LightTextColor);
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
`;

const TransportationItemDescription = styled.h2`
  color: var(--GreyTextColor);
  font-family: NotoSansDemiLight;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.62px;
`;

const TransportationItem = ({
  transportationInfo,
  time,
  transfer,
}: TransportationItemProps) => {
  return (
    <TransportationItemWrapper>
      <TransportationItemHeading>
        {transportationInfo}
      </TransportationItemHeading>
      <TransportationItemDescription>
        {time}분/환승{transfer}회
      </TransportationItemDescription>
    </TransportationItemWrapper>
  );
};

export default TransportationItem;
