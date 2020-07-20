import React from "react";
import styled from "styled-components";

type ToolbarProps = {
  rightContents?: React.ReactNode;
  leftContents?: React.ReactNode;
  backgroundColor?: boolean;
  bottomShadow?: boolean;
};

const DEVICE_SIZE = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
};

const ToolbarWrapper = styled.nav<{
  backgroundColor?: boolean;
  bottomShadow?: boolean;
}>`
  padding: 1.625rem 2.063rem 1.625rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? "var(--BackgroundColor)" : "none"};
  box-shadow: ${({ bottomShadow }) =>
    bottomShadow ? "0px 4px 6px rgba(0,0,0,0.2)" : "none"};

  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 1.125rem 1.25rem;
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

const Toolbar = ({
  rightContents,
  leftContents,
  backgroundColor,
  bottomShadow,
}: ToolbarProps) => {
  return (
    <ToolbarWrapper
      backgroundColor={backgroundColor}
      bottomShadow={bottomShadow}
    >
      <ToolbarContent>
        <ToolbarItem>{leftContents}</ToolbarItem>
        <ToolbarItem>{rightContents}</ToolbarItem>
      </ToolbarContent>
    </ToolbarWrapper>
  );
};

export default Toolbar;
