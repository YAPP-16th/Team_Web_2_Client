import React, { MouseEvent } from "react";
import styled, { keyframes } from "styled-components";
import {
  Link,
  HashRouter,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";

// Custom Hooks
import useListView from "./ListViewHooks";

// Components
import SearchResultItem from "../../components/ListViewItem/SearchResultItem";

// Responsive

// Animations
const moveUp = keyframes`
  0% {
    transform: translateY(0);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  75% {
    transform: translateY(Calc(250px - 100vh));
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  100% {
    transform: translateY(Calc(250px - 100vh));
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

const moveDown = keyframes`
  0% {
    transform: translateY(Calc(250px - 100vh));
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
  height: Calc(100vh - 193px);
  overflow-y: scroll;
  scrollbar-width: 0px;
  position: fixed;
  top: 92%;
  background-color: var(--BackgroundColor);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  animation: ${(props) => (props.clicked ? moveUp : moveDown)} 1s ease-out
    forwards;
`;

const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: var(--BackgroundColor);

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
  { id: 5, zoneCode: 602011, zoneName: "강남구 역삼 1동", distance: 11.5 },
  { id: 6, zoneCode: 602011, zoneName: "강남구 역삼 1동", distance: 11.5 },
  { id: 7, zoneCode: 602011, zoneName: "강남구 역삼 1동", distance: 11.5 },
  { id: 8, zoneCode: 602011, zoneName: "강남구 역삼 1동", distance: 11.5 },
];

const ListViewContainer = ({ history, location }: RouteComponentProps) => {
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
    listView.toggle(); // 어 이거 지우면 되는거 같은데
  };

  // Props Handling
  const searchResultItemList = items.map((item) => {
    return (
      <div key={item.id}>
        <Link to={`/${item.id}/timecompare`}>
          <SearchResultItem
            id={item.id}
            zoneCode={item.zoneCode}
            zoneName={item.zoneName}
            distance={item.distance}
            onClick={onItemClickHandler}
          />
        </Link>
      </div>
    );
  });

  if (location.search && !location.hash.includes("/zone/")) {
    return (
      <HashRouter basename="/zone">
        <ListViewContainerWrapper clicked={listView.toggled}>
          <ModalHeader>
            <span className="text">
              {listView.toggled ? `${items.length}개의 ZONE` : ""}
            </span>
            <span className="button" onMouseUp={onToggleHandler}>
              리스트뷰 +
            </span>
          </ModalHeader>
          <ModalBody>{searchResultItemList}</ModalBody>
        </ListViewContainerWrapper>
      </HashRouter>
    );
  } else {
    return <div></div>;
  }
};

export default withRouter(ListViewContainer);