import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";

import useRoom from "../../hooks/roomHooks";

// Components
import RealEstateListItem, {
  RealEstateItemProps,
} from "../../components/ListViewItem/RealEstateListItem";
import DropDown from "../../components/DropDown/DropDown";
import LoadingDots from "../../components/Loading/LoadingDots";

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
  > div > a {
    transition: opacity 0.5s;
    &:hover {
      opacity: 0.5;
    }
  }
  @media screen and (min-width: 1060px) {
    grid-gap: 18px;
    grid-template-columns: repeat(4, minmax(250px, 1fr));
  }
`;

const MoreItemButton = styled.a`
  cursor: pointer;
  display: block;
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

  useEffect(() => {
    room.loadRoomsByZoneId(zoneId);
  }, []);

  const realestateContents = room.data.filter(x => x.img !== null);

  const realEstateListItems = realestateContents.map((item) => {
    return (
      <div key={item.id} data-testid="realestate-item">
        <RealEstateListItem
          registerId={item.registerId}
          className="realestate-item"
          buildingType={item.buildingType}
          name={item.name}
          deposit={item.deposit}
          img={item.img}
          monthlyPayment={item.monthlyPayment}
          loanType={item.loanType}
          roomType={item.roomType}
        />
      </div>
    );
  });

  return (
    <>
      <RealEstateContainerWrapper>
        <Header>
          <Heading>
            실거래가를 <br />
            확인해보세요.
          </Heading>
          <DropDown text="등록순" />
        </Header>
        <RealEstateListItemsWrapper>
          {room.loading && <LoadingDots color="white" size="15px" />}
          {room.error && (
            <p style={{ textAlign: "center", color: "white" }}>에러발생</p>
          )}
          {realestateContents.length !== 0 ? (
            realEstateListItems
          ) : (
            <p
              style={{
                width: "300px",
                marginBottom: "30px",
                textAlign: "center",
                color: "white",
                display: room.loading ? "none" : "block",
              }}
            >
              이 지역에서 판매 중인 매물이 없습니다
            </p>
          )}
        </RealEstateListItemsWrapper>
        <MoreItemButton href="https://www.peterpanz.com/" target="blank">
          피터팬에서 더 많은 매물 보기
        </MoreItemButton>
      </RealEstateContainerWrapper>
    </>
  );
};

export default RealEstateContainer;
