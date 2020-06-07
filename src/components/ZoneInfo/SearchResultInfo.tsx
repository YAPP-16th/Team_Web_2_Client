import React from "react";
import styled from "styled-components";

// Icon
import Icon from "../Icon/Icon";

type SearchResultInfoProps = {
  itemCount: string | number;
  addedHeight: string;
  className?: string;
  searchData?: SearchData | null;
};

interface SpanProps {
  color?: string;
  marginRight?: boolean;
}

interface EmphasisSpanProps {
  highlight?: boolean;
  bold?: boolean;
}

export type SearchData = {
  type: string;
  address: string;
  transitMode: string;
  transferLimit: string;
  maxTime: number;
  minTime: number;
} | null;

const DEVICE_SIZE = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
};

const SearchResultInfoWrapper = styled.div<{ addedHeight: string }>`
  display: flex;
  flex-direction: column;
  transition: all 1s;
  min-width: 320px;
  max-width: 1120px;
  width: 100%;
  padding: 2.438rem 2.063rem 1.75rem;

  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 1.438rem 1.25rem 1rem;
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
  margin-right: ${(props) => (props.marginRight ? 0.625+`rem` : "")};
`;

const EmphasisSpan = styled(Span)<EmphasisSpanProps>`
  color: var(--LightTextColor);
  font-family: ${(props) => (props.bold ? "GothamMedium" : "NotoSansMedium")};
  font-weight: ${(props) => (props.bold ? "500" : "300")};
  font-size: ${(props) => (props.highlight ? 2 : 1.875)}rem;
  line-height: 2.375rem;
  letter-spacing: -${(props) => (props.highlight ? 0.089 : 0.084)}rem;
  cursor: default;

  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: ${(props) => (props.highlight ? 1.5 : 1.375)}rem;
    line-height: 1.875rem;
    letter-spacing: -${(props) => (props.highlight ? 0.067 : 0.061)}rem;
  }
`;

const SearchSpan = styled(Span)`
  font-family: NotoSansMedium;
  font-size: 1.25rem;
  cursor: default;

  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    display: none;
  }
`;

const Divider = styled.hr`
  border: 1px solid var(--DarkTextColor);
  margin-top: 2.125rem;
  margin-bottom: 1.438rem;

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
  searchData,
}: SearchResultInfoProps) => {
  return (
    <SearchResultInfoWrapper addedHeight={addedHeight} className={className}>
      <ResultContainer>
        <LeftContent>
          <LeftRow>
            <EmphasisSpan bold>{itemCount}</EmphasisSpan>
            <EmphasisSpan>개의</EmphasisSpan>
            <EmphasisSpan bold highlight>
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
      {searchData && (
        <>
          <Divider />
          <SearchContainer>
            <SearchSpan color="var(--LightTextColor)" marginRight>
              {searchData.type}
            </SearchSpan>
            <SearchSpan marginRight>{searchData.address}</SearchSpan>
            <SearchSpan color="var(--LightTextColor)" marginRight>
              까지 / {searchData.transitMode}
            </SearchSpan>
            <SearchSpan marginRight>
              {searchData.transferLimit}{" "}
            </SearchSpan>
            <SearchSpan color="var(--LightTextColor)">
              로 / {searchData.minTime} - {searchData.maxTime}분
            </SearchSpan>
          </SearchContainer>
        </>
      )}
    </SearchResultInfoWrapper>
  );
};

export default SearchResultInfo;
