import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type TabItemProps = {
  children?: React.ReactNode;
  to: string;
  testId?: string;
  active: boolean;
};

const TabItemWrapper = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  padding: 13.5px;
  transition: border-bottom 0.35s;
  border-bottom: 2px solid
    ${({ active }) => (active ? "var(--PrimaryColor)" : "var(--ItemColor)")};
  transition: border-bottom 0.35s;
  > a {
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: -0.67px;
    text-align: center;
    color: ${({ active }) =>
      active ? "var(--LightTextColor)" : "var(--DarkTextColor)"};
    transition: color 0.35s;

    &:focus {
      outline: none;
    }
  }
`;

const TabItem = ({ children, to, testId, active }: TabItemProps) => {
  return (
    <TabItemWrapper className="tabItem" active={active}>
      <Link className="tabItemLink" to={`/${to}`} data-testid={testId}>
        {children}
      </Link>
    </TabItemWrapper>
  );
};

TabItem.defaultProps = {
  active: false,
};

export default TabItem;
