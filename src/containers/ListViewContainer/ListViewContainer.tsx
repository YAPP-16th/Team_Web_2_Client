import React, { useState, MouseEvent } from "react";
import styled, { keyframes } from "styled-components";

// Components
import ListView from "../../components/ListView/ListView";

type ListViewContainerProps = {};

// Animations
const moveUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-78%);
  }
`

const moveDown = keyframes`
  from {
    transform: translateY(-78%);
  }
  to {
    transform: translateY(0);
  }
`

// Styles
const ListViewContainerWrapper = styled.div<{clicked: boolean}>`
  width: 100%;
  position: absolute;
  top: 92%;
  background-color: var(--BackgroundColor);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  animation: ${props => props.clicked ? moveUp : moveDown} 0.3s linear forwards;
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
    cursor: pointer;
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



const ListViewContainer = ({}: ListViewContainerProps) => {

  // States
  const [ listViewState, setListViewState ] = useState({
    clicked: false
  })

  // Handlers
  const onDragStartHandler = (e: MouseEvent) => {
    const processed = { ...listViewState };
    processed.clicked = !processed.clicked;
    setListViewState(processed);
    if (listViewState) {
      e.currentTarget.innerHTML = '리스트뷰 -'
    } else {
      e.currentTarget.innerHTML = '리스트뷰 +'
    }
  }

  return (
    <ListViewContainerWrapper
      clicked={listViewState.clicked}
    >
      <ModalHeader>
  <span className="text">{listViewState.clicked ? `${items.length}개의 ZONE` : ''}</span>
        <span className="button" onMouseUp={onDragStartHandler}>리스트뷰 +</span>
      </ModalHeader>
      <ModalBody>
        <ListView items={items} />
      </ModalBody>
    </ListViewContainerWrapper>
  );
};

export default ListViewContainer;
