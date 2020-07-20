import React from 'react';
import styled from 'styled-components';

export type RealEstateItemProps = {
  registerId: number;
  img: string | null;
  loanType: string;
  deposit: number;
  monthlyPayment: number;
  name: string;
  roomType: string;
  buildingType: string | null;
  className?: string;
};

const RealEstateItemWrapper = styled.a`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  color: var(--LightTextColor);
  background-color: var(--ItemColor);
  overflow: hidden;
`;

const TextInfoWrapper = styled.div`
  padding: 14px;
  height: 132px;
`;

const RealEstateItemImage = styled.img`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  width: 100%;
  height: 154px;
`;

const RealEstateItemEmptyImage = styled.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  width: 100%;
  height: 154px;
  background-color: var(--ItemColor);
`;

const RealEstateItemLoanType = styled.span`
  padding: 3px 7px;
  border-radius: 10px;
  background-color: var(--PrimaryColor);
  font-size: 12px;
  font-family: NotoSansBold;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.54px;
  color: var(--ItemColor);
  margin-right: 8px;
`;

const RealEstateItemDeposit = styled.h2`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
`;

const RealEstateItemMonthlyPayment = styled.h2`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
`;

const MainInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

const RealEstateItemName = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.62px;
  color: var(--GreyTextColor);
  margin-bottom: 8px;
`;

const SubInfoWrapper = styled.div`
  font-size: 12px;
  font-family: NotoSansBold;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.54px;
  color: var(--DarkTextColor);
`;

const RealEstateItemBuildingType = styled.span``;

const RealEstateItemRoomType = styled.span``;

const RealEstateItem = ({
  registerId,
  img,
  loanType,
  deposit,
  monthlyPayment,
  name,
  roomType,
  buildingType,
  className,
}: RealEstateItemProps) => {
  return (
    <RealEstateItemWrapper
      className={className}
      href={`https://www.peterpanz.com/house/${registerId}`}
      target="blank"
    >
      {img ? <RealEstateItemImage src={img} /> : <RealEstateItemEmptyImage />}
      <TextInfoWrapper>
        <MainInfoWrapper>
          <RealEstateItemLoanType>{loanType}</RealEstateItemLoanType>
          <RealEstateItemDeposit>{deposit / 10000}</RealEstateItemDeposit>/
          <RealEstateItemMonthlyPayment>
            {monthlyPayment / 10000}
          </RealEstateItemMonthlyPayment>
        </MainInfoWrapper>
        <RealEstateItemName>
          {img ? name : '판매완료 혹은 비공개 매물'}
        </RealEstateItemName>
        <SubInfoWrapper>
          <RealEstateItemBuildingType>
            {buildingType}
          </RealEstateItemBuildingType>
          <RealEstateItemRoomType>{roomType}</RealEstateItemRoomType>
        </SubInfoWrapper>
      </TextInfoWrapper>
    </RealEstateItemWrapper>
  );
};

export default RealEstateItem;
