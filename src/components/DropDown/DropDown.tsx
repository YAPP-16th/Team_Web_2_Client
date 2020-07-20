import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon/Icon';

export type DropDownItemProps = {
  text: string;
  onClick?: () => void;
};

type DropDownProps = {
  text: string;
  items?: Array<DropDownItemProps>;
};

const DropDownWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--DarkTextColor);
`;

const Text = styled.span`
  margin-right: 7.5px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.29;
  letter-spacing: -0.62px;
`;

const DropDown = ({ text }: DropDownProps) => {
  return (
    <DropDownWrapper>
      <Text>{text}</Text>
      <Icon icon="filterOption" size="8px" />
    </DropDownWrapper>
  );
};

export default DropDown;
