import React from "react";
import styled from "styled-components";

export type ListViewItemProps = {
  zoneCode: string | number;
  zoneName: string;
  distance: string | number;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
};

const ListViewItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid grey;
  padding: 14px 20px;
`;

const ZoneCodeWrapper = styled.div`
  font-family: GothamMedium;
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
  zoneCode,
  zoneName,
  distance,
  className,
}: ListViewItemProps) => {
  return (
    <ListViewItemWrapper>
      <ZoneCodeWrapper>ZONE {zoneCode}</ZoneCodeWrapper>
      <ZoneNameWrapper>{zoneName}</ZoneNameWrapper>
      <DistanceWrapper>{distance}</DistanceWrapper>
    </ListViewItemWrapper>
  );
};

export default ListViewItem;
