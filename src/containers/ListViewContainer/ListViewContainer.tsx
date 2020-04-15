import React from "react";
import styled from "styled-components";

// Components
import ListView from "../../components/ListView/ListView";

type ListViewContainerProps = {};

// Styles
const ListViewContainerWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 92%;
  background-color: var(--BackgroundColor);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  
  span {
    color: var(--PrimaryColor);
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.14;
    letter-spacing: -0.62px;
  }

  .text {
    font-family: GothamMedium, NotoSansMedium;
  }

  .button {
    font-family: NotoSansMedium;
  }

  padding: 10px 20px;
  
`;

const ModalBody = styled.div`
  color: var(--LightTextColor);
`;

// Dummy Data
const items = [
  { zoneCode: 602011, zoneName: "강남구 역삼 1동", distance: 11.5 },
  { zoneCode: 602011, zoneName: "강남구 역삼 1동", distance: 11.5 },
  { zoneCode: 602011, zoneName: "강남구 역삼 1동", distance: 11.5 },
  { zoneCode: 602011, zoneName: "강남구 역삼 1동", distance: 11.5 },
];

// Interative
const onDragStartHandler = () => {

}


const ListViewContainer = ({}: ListViewContainerProps) => {
  return (
    <ListViewContainerWrapper>
      <ModalHeader>
        <span className="text">4개의 ZONE</span>
        <span className="button">리스트뷰 +</span>
      </ModalHeader>
      <ModalBody>
        <ListView items={items} />
      </ModalBody>
    </ListViewContainerWrapper>
  );
};

export default ListViewContainer;
