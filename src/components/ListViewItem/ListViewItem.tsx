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
  padding: 14px 20px;
`;

const ZoneCodeWrapper = styled.div``;

const ZoneNameWrapper = styled.div``;

const DistanceWrapper = styled.div``;

const ListViewItem = ({
  zoneCode,
  zoneName,
  distance,
  className,
}: ListViewItemProps) => {
  return (
    <ListViewItemWrapper>
      <ZoneCodeWrapper>{zoneCode}</ZoneCodeWrapper>
      <ZoneNameWrapper>{zoneName}</ZoneNameWrapper>
      <DistanceWrapper>{distance}</DistanceWrapper>
    </ListViewItemWrapper>
  );
};

export default ListViewItem;
