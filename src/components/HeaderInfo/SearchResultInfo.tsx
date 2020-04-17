import React from "react";
import styled from "styled-components";
import { FlexBoxSpacer } from "../../utils/utilComponents";

// Icon
import Icon from "../Icon/Icon";

type SearchResultInfoProps = {
  ItemCount: string | number;
};

const SearchResultInfoWrapper = styled.div`
  padding: 20px;
  display: flex;
`;

const LeftContent = styled.div`
  font-size: 22px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.98px;
`;

const RightContent = styled.div`
  display: flex;
  align-items: flex-end;
  path > fill {
    color: var(--GreyTextColor);
  }
`;

const BoldText = styled.h1`
  color: var(--LightTextColor);
  font-size: 24px;
  font-weight: 500;
`;

const Text = styled.h2`
  color: var(--GreyTextColor);
  font-family: Gotham;
  font-size: 21.3px;
  font-weight: 500;
  letter-spacing: -1.07px;
`;

const SearchResultInfo = ({ ItemCount }: SearchResultInfoProps) => {
  return (
    <SearchResultInfoWrapper>
      <LeftContent>
        <BoldText>{ItemCount}개의 ZONE이</BoldText>
        <Text>검색되었습니다.</Text>
      </LeftContent>
      <FlexBoxSpacer />
      <RightContent>
        <Icon icon="Test" />
      </RightContent>
    </SearchResultInfoWrapper>
  );
};

export default SearchResultInfo;
