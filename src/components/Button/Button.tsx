import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  height: min-content;
  border-radius: 7px;
  background-color: var(--LightItemColor);
  border: none;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.67;
  letter-spacing: -0.54px;
  text-align: right;
  color: #000000;
  padding: 0px 9px;
  display: flex;
  align-items: center;
`;

export const GhostButton = styled.button`
  border-radius: 8px;
  border: solid 2px var(--ItemColor);
  padding: 15px 22px;
`;

export const TagButton = styled.button`
  height: 33px;
  background: none;
  border-radius: 16.5px;
  border: solid 1px var(--PrimaryColor);
  padding: 8px 14px;
  color: var(--PrimaryColor);
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.62px;
`;
