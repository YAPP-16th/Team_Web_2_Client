import React from "react";
import styled from "styled-components";

// Icon
import Icon from "../Icon/Icon";

type SearchResultInfoProps = {
  itemCount: string | number;
  addedHeight: string;
  className?: string;
};

interface SpanProps {
  color?: string;
  marginRight?: string;
}

interface EmphasisSpanProps {
  fontSize?: number;
  letterSpacing?: string;
  bold?: boolean;
}

const DEVICE_SIZE = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
};

const SearchResultInfoWrapper = styled.div<{ addedHeight: string }>`
  display: flex;
  flex-direction: column;
  transition: all 1s;
  min-width: 360px;
  max-width: 1120px;
  width: 100%;
  padding: 39px 33px 28px;

  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 7px 20px 16px;
  }
`;

const ResultContainer = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  font-stretch: normal;
  font-style: normal;
`;

const LeftRow = styled.div`
  width: 100%;
`;

const RightContent = styled.div`
  display: flex;
  align-items: flex-end;
  path > fill {
    color: var(--GreyTextColor);
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;

  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    display: none;
  }
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;

const Span = styled.span<SpanProps>`
  color: ${(props) => (props.color ? props.color : "var(--GreyTextColor)")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "")};
`;

const EmphasisSpan = styled(Span)<EmphasisSpanProps>`
  color: var(--LightTextColor);
  font-family: ${(props) => (props.bold ? "GothamMedium" : "NotoSansMedium")};
  font-weight: ${(props) => (props.bold ? "500" : "300")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 30)}px;
  line-height: 38px;
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "-1.34px"};
  cursor: default;

  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: ${(props) => (props.fontSize ? props.fontSize - 8 : 22)}px;
    line-height: 30px;
  }
`;

const SearchSpan = styled(Span)`
  font-family: NotoSansMedium;
  font-size: 20px;
  cursor: default;

  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    display: none;
  }
`;

const Divider = styled.hr`
  border: 1px solid var(--DarkTextColor);
  margin-top: 34px;
  margin-bottom: 23px;

  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    display: none;
  }
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;

const SearchResultInfo = ({
  itemCount,
  addedHeight,
  className,
}: SearchResultInfoProps) => {
  const location = "회사",
    address = "서울 강남구 선릉로 429 (KR타워)",
    transport = "지하철",
    transmit = "환승 여부 상관없음",
    minTime = 10,
    maxTime = 20;
  return (
    <SearchResultInfoWrapper addedHeight={addedHeight} className={className}>
      <ResultContainer>
        <LeftContent>
          <LeftRow>
            <EmphasisSpan bold>{itemCount}</EmphasisSpan>
            <EmphasisSpan>개의</EmphasisSpan>
            <EmphasisSpan fontSize={32} letterSpacing="-1.43px" bold>
              ZONE
            </EmphasisSpan>
            <EmphasisSpan>이</EmphasisSpan>
          </LeftRow>
          <LeftRow>
            <EmphasisSpan>검색되었습니다.</EmphasisSpan>
          </LeftRow>
        </LeftContent>
        <RightContent>
          <Icon icon="share" size={"20px"} />
        </RightContent>
      </ResultContainer>
      <Divider />
      <SearchContainer>
        <SearchSpan color="var(--LightTextColor)" marginRight="10px">
          {location}
        </SearchSpan>
        <SearchSpan marginRight="10px">{address}</SearchSpan>
        <SearchSpan color="var(--LightTextColor)" marginRight="10px">
          까지 / {transport}
        </SearchSpan>
        <SearchSpan marginRight="10px">{transmit} </SearchSpan>
        <SearchSpan color="var(--LightTextColor)">
          로 / {minTime} - {maxTime}분
        </SearchSpan>
      </SearchContainer>
    </SearchResultInfoWrapper>
  );
};

export default SearchResultInfo;
