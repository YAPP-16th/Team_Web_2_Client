import React, { useState, MouseEvent } from "react";
import styled, { keyframes } from "styled-components";
import { withRouter, RouteComponentProps } from 'react-router-dom';

// Custom Hooks
import useListView from './ListViewHooks';

// Components
import SearchResultItem from "../../components/ListViewItem/SearchResultItem";

type ListViewContainerProps = {
  history: RouteComponentProps['history'],

};

// Animations
const moveUp = keyframes`
  0% {
    transform: translateY(0);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  75% {
    transform: translateY(-430px);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  100% {
    transform: translateY(-430px);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

const moveDown = keyframes`
  0% {
    transform: translateY(-430px);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  75% {
    transform: translateY(0);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  100% {
    transform: translateY(0);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`;

// Styles
const ListViewContainerWrapper = styled.div<{ clicked: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 92%;
  background-color: var(--BackgroundColor);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  animation: ${(props) => (props.clicked ? moveUp : moveDown)} 0.3s linear
    forwards;
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
  }

  .button {
    cursor: pointer;
  }

  padding: 10px 20px;
`;

const ModalBody = styled.div`
  color: var(--LightTextColor);
`;

// Dummy Data
const items = [
  { id: 1, zoneCode: 602011, zoneName: "강남구 역삼 1동", distance: 11.5 },
  { id: 2, zoneCode: 602011, zoneName: "강남구 역삼 1동", distance: 11.5 },
  { id: 3, zoneCode: 602011, zoneName: "강남구 역삼 1동", distance: 11.5 },
  { id: 4, zoneCode: 602011, zoneName: "강남구 역삼 1동", distance: 11.5 },
];

const ListViewContainer = ({history}: ListViewContainerProps) => {
  // States
  const listView = useListView();

  // Handlers
  const onToggleHandler = (e: MouseEvent) => {
    listView.toggle();
    if (listView.toggled) {
      e.currentTarget.innerHTML = "리스트뷰 +";
    } else {
      e.currentTarget.innerHTML = "리스트뷰 -";
    }
  };

  const onItemClickHandler = (id: string | number) => {
    history.push(`/search/zone/${id}`);
  }

  // Props Handling
  const searchResultItemList = items.map((item) => {
    return (
      <div key={item.id}>
        <SearchResultItem
          id={item.id}
          zoneCode={item.zoneCode}
          zoneName={item.zoneName}
          distance={item.distance}
          onClick={onItemClickHandler}
        />
      </div>
    );
  });

  return (
    <ListViewContainerWrapper clicked={listView.toggled}>
      <ModalHeader>
        <span className="text">
          {listView.toggled ? `${items.length}개의 ZONE` : ""}
        </span>
        <span className="button" onMouseUp={onToggleHandler}>
          리스트뷰 +
        </span>
      </ModalHeader>
      <ModalBody>
        {searchResultItemList}
      </ModalBody>
    </ListViewContainerWrapper>
  );
};

export default withRouter(ListViewContainer);
