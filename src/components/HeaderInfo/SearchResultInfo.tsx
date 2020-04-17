import React from "react";
import styled from "styled-components";

// Icon
import Icon from "../Icon/Icon";

type SearchResultInfoProps = {
  ItemCount: string | number;
};

const SearchResultInfoWrapper = styled.div``;

const LeftContent = styled.div``;

const RightContent = styled.div``;

const BoldText = styled.h1``;

const Text = styled.h2``;

const SearchResultInfo = ({ ItemCount }: SearchResultInfoProps) => {
  return (
    <SearchResultInfoWrapper>
      <LeftContent>
        <BoldText>{ItemCount}개의 ZONE이</BoldText>
        <Text>검색되었습니다</Text>
      </LeftContent>
      <RightContent>
        <Icon icon="Test" />
      </RightContent>
    </SearchResultInfoWrapper>
  );
};

export default SearchResultInfo;
