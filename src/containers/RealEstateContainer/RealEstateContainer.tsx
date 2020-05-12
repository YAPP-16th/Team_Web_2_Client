import React, { useEffect } from "react";
import styled from "styled-components";

import useRoom from "../../hooks/roomHooks";

// Components
import RealEstateListItem, {
  RealEstateItemProps,
} from "../../components/ListViewItem/RealEstateListItem";
import DropDown from "../../components/DropDown/DropDown";

type RealEstateContainerProps = {
  zoneId: number;
};

const RealEstateContainerWrapper = styled.div`
  padding: 30px 14px;
  background-color: var(--BackgroundColor);

  .realestate-item {
  }

  @media screen and (min-width: 1060px) {
    width: 1120px;
    margin: auto;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 50px;
  @media screen and (min-width: 1060px) {
    margin-top: 80px;
  }
`;

const Heading = styled.h1`
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.98px;
  color: var(--LightTextColor);
  @media screen and (min-width: 1060px) {
    font-size: 32px;
  }
`;

const RealEstateListItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  grid-gap: 14px;
  margin-bottom: 24px;
  @media screen and (min-width: 1060px) {
    grid-gap: 18px;
    grid-template-columns: repeat(4, minmax(250px, 1fr));
  }
`;

const MoreItemButton = styled.button`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.71px;
  text-align: center;
  color: #1d1d1d;
  border-radius: 8px;
  padding: 17px 50px;
  background-color: var(--PrimaryColor);
  border: none;
  text-align: center;
`;

const RealEstateContainer = ({ zoneId }: RealEstateContainerProps) => {
  const room = useRoom();

  // const RealEstateListContents = room.data.map(data => ({
    
  // }));

  // DummyData
  const RealEstateListContents: Array<RealEstateItemProps> = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80",
      paymentType: "월세",
      deposit: 1000,
      monthlyPayment: 60,
      description: "강남역 도보 5분 원룸 저렴한 월세",
      roomType: "빌라",
      buildingType: "주택",
      numOfRoom: 1,
    },  
    {
      imageUrl:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80",
      paymentType: "월세",
      deposit: 1000,
      monthlyPayment: 60,
      description: "강남역 도보 5분 원룸 저렴한 월세",
      roomType: "빌라",
      buildingType: "주택",
      numOfRoom: 2,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80",
      paymentType: "월세",
      deposit: 1000,
      monthlyPayment: 60,
      description: "강남역 도보 5분 원룸 저렴한 월세",
      roomType: "빌라",
      buildingType: "주택",
      numOfRoom: 1,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80",
      paymentType: "월세",
      deposit: 1000,
      monthlyPayment: 60,
      description: "강남역 도보 5분 원룸 저렴한 월세",
      roomType: "빌라",
      buildingType: "주택",
      numOfRoom: 1,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80",
      paymentType: "월세",
      deposit: 1000,
      monthlyPayment: 60,
      description: "강남역 도보 5분 원룸 저렴한 월세",
      roomType: "빌라",
      buildingType: "주택",
      numOfRoom: 2,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80",
      paymentType: "월세",
      deposit: 1000,
      monthlyPayment: 60,
      description: "강남역 도보 5분 원룸 저렴한 월세",
      roomType: "빌라",
      buildingType: "주택",
      numOfRoom: 1,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80",
      paymentType: "월세",
      deposit: 1000,
      monthlyPayment: 60,
      description: "강남역 도보 5분 원룸 저렴한 월세",
      roomType: "빌라",
      buildingType: "주택",
      numOfRoom: 1,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80",
      paymentType: "월세",
      deposit: 1000,
      monthlyPayment: 60,
      description: "강남역 도보 5분 원룸 저렴한 월세",
      roomType: "빌라",
      buildingType: "주택",
      numOfRoom: 1,
    },
  ];

  useEffect(() => { room.loadRoomsByZoneId(zoneId) }, []);

  

  const realEstateListItems = RealEstateListContents.map((content) => {
    return (
      <RealEstateListItem
        className="realestate-item"
        buildingType={content.buildingType}
        description={content.description}
        deposit={content.deposit}
        imageUrl={content.imageUrl}
        monthlyPayment={content.monthlyPayment}
        numOfRoom={content.numOfRoom}
        paymentType={content.paymentType}
        roomType={content.roomType}
      />
    );
  });

  return (
    <>
      {room.loading && <p style={{ textAlign: "center" }}>로딩중..</p>}
      {room.error && <p style={{ textAlign: "center" }}>에러발생</p>}
      <RealEstateContainerWrapper>
        <Header>
          <Heading>
            실거래가를 <br />
            확인해보세요.
          </Heading>
          <DropDown text="등록순" />
        </Header>
        <RealEstateListItemsWrapper>
          {room.data.length !== 0 ? realEstateListItems : "매물이 없습니다"}
        </RealEstateListItemsWrapper>
        <MoreItemButton>피터팬에서 더 많은 매물 보기</MoreItemButton>
      </RealEstateContainerWrapper>
    </>
  );
};

export default RealEstateContainer;
