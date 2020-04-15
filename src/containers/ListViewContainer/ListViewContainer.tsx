import React from "react";
import styled from "styled-components";

// Components
import ListView from "../../components/ListView/ListView";

type ListViewContainerProps = {
};

// Styles
const ListViewContainerWrapper = styled.div`
`;
const ModalHeader = styled.div`
  display: flex;
  > span {
    color: var(--LightTextColor);
  }
`;

// Dummy Data
const items = [
  { zoneCode: 0o6020, zoneName: "강남구 역삼 1동", distance: 11.5 }
]

const ListViewContainer = ({}: ListViewContainerProps) => {
  return (
    <ListViewContainerWrapper>
      <ModalHeader>
        <span>4개의 뷰</span>
        <span></span>
      </ModalHeader>
      <ListView 
        items={items}
      />
    </ListViewContainerWrapper>
  );
};

export default ListViewContainer;
