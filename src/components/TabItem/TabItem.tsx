import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type TabItemProps = {
  children?: React.ReactNode;
  to: string;
};

const TabItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 17px;
  border-bottom: 2px solid var(--ItemColor);
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
    color: var(--DarkTextColor);
    transition: color 0.35s;

    &:focus {
      color: var(--LightTextColor);
      outline: none;
    }
  }
  &:focus-within {
    border-bottom: 2px solid var(--PrimaryColor);
  }
`;

const TabItem = ({ children, to }: TabItemProps) => {
  return (
    <TabItemWrapper className="tabItem">
      <Link className="tabItemLink" to={`/${to}`}>
        {children}
      </Link>
    </TabItemWrapper>
  );
};

export default TabItem;
