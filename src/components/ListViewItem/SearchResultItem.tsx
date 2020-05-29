import React from "react";
import styled from "styled-components";

export type ListViewItemProps = {
  id: string | number;
  zoneCode: string | number;
  zoneName: string;
  distance: number;
  onClick: (id: string | number) => void;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
};

const METER_CONSTANT = 10;

const ListViewItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(182, 182, 182, 0.1);
  padding: 14px 20px;
`;

const ZoneCodeWrapper = styled.div`
  font-size: 17px;
  color: var(--LightTextColor);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.76;
  letter-spacing: -0.76px;
`;

const ZoneNameWrapper = styled.div`
  font-family: NotoSansRegular;
  font-size: 16px;
  color: var(--GreyTextColor);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.71px;
`;

const DistanceWrapper = styled.div`
  color: var(--GreyTextColor);
  font-family: GothamBook;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.67px;
  text-align: right;
`;

const ListViewItem = ({
  id,
  zoneCode,
  zoneName,
  distance,
  className,
  onClick
}: ListViewItemProps) => {
  return (
    <ListViewItemWrapper onClick={() => onClick(id)}>
      <ZoneCodeWrapper>ZONE {zoneCode}</ZoneCodeWrapper>
      <ZoneNameWrapper>{zoneName}</ZoneNameWrapper>
      <DistanceWrapper>{(distance / METER_CONSTANT).toFixed(1)}km</DistanceWrapper>
    </ListViewItemWrapper>
  );
};

export default ListViewItem;
