import React from "react";
import styled from "styled-components";

export type RealEstateItemProps = {
  imageUrl: string;
  paymentType: "월세" | "전세";
  deposit: number | string;
  monthlyPayment: number | string;
  description: string;
  roomType: "빌라" | "오피스텔";
  buildingType: "주택" | "아파트";
  numOfRoom: number | string;
  className?: string;
};

const RealEstateItemWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  color: var(--LightTextColor);
  background-color: var(--ItemColor);
`;

const TextInfoWrapper = styled.div`
  padding: 14px;
`;

const RealEstateItemImage = styled.img`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  width: 100%;
  height: 154px;
`;

const RealEstateItemPaymentType = styled.span`
  padding: 3px 7px;
  border-radius: 10px;
  background-color: var(--PrimaryColor);
  font-size: 12px;
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

const RealEstateItemDescription = styled.p`
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
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.54px;
  color: var(--DarkTextColor);
`;

const RealEstateItemRoomType = styled.span``;

const RealEstateItemBuildingType = styled.span``;

const RealEstateItemNumOfRoom = styled.span``;

const RealEstateItem = ({
  imageUrl,
  paymentType,
  deposit,
  monthlyPayment,
  description,
  roomType,
  buildingType,
  numOfRoom,
  className,
}: RealEstateItemProps) => {
  if (numOfRoom < 1) {
    numOfRoom = "방 없음";
  } else if (numOfRoom === 1) {
    numOfRoom = "원룸";
  } else if (numOfRoom === 2) {
    numOfRoom = "투룸";
  } else {
    numOfRoom = "방 3개 이상";
  }

  return (
    <RealEstateItemWrapper className={className}>
      <RealEstateItemImage src={imageUrl}></RealEstateItemImage>
      <TextInfoWrapper>
        <MainInfoWrapper>
          <RealEstateItemPaymentType>{paymentType}</RealEstateItemPaymentType>
          <RealEstateItemDeposit>{deposit}</RealEstateItemDeposit>/
          <RealEstateItemMonthlyPayment>
            {monthlyPayment}
          </RealEstateItemMonthlyPayment>
        </MainInfoWrapper>
        <RealEstateItemDescription>{description}</RealEstateItemDescription>
        <SubInfoWrapper>
          <RealEstateItemBuildingType>
            {buildingType}
          </RealEstateItemBuildingType>
          /<RealEstateItemRoomType>{roomType}</RealEstateItemRoomType> |{" "}
          <RealEstateItemNumOfRoom>{numOfRoom}</RealEstateItemNumOfRoom>
        </SubInfoWrapper>
      </TextInfoWrapper>
    </RealEstateItemWrapper>
  );
};

export default RealEstateItem;
