import React from "react";
import styled from "styled-components";

type ToolbarProps = {
  rightContents?: React.ReactNode;
  leftContents?: React.ReactNode;
};

const DEVICE_SIZE = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
};

const ToolbarWrapper = styled.nav`
  padding: 44px 33px 26px;
  backgroundcolor: var(--BackgroundColor);
  color: var(--GreyTextColor);

  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 18px 20px;
  }
`;

const ToolbarContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToolbarItem = styled.li`
  list-style: none;
  padding-left: 0px;
`;

const Toolbar = ({ rightContents, leftContents }: ToolbarProps) => {
  return (
    <ToolbarWrapper>
      <ToolbarContent>
        <ToolbarItem>{leftContents}</ToolbarItem>
        <ToolbarItem>{rightContents}</ToolbarItem>
      </ToolbarContent>
    </ToolbarWrapper>
  );
};

export default Toolbar;
