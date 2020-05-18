import React from "react";
import Styled from "styled-components";
import { ReactComponent as twinkle } from "../../assets/svgs/loading-twinkle.svg";
import { ReactComponent as close } from "../../assets/svgs/loading-close.svg";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

interface LoadingContainerProps {
  address: string;
  transitMode: string;
  minTime: number;
  maxTime: number;
  closeCallback?: () => void | undefined;
}

const DEVICE_SIZE = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
};

const Container = Styled.div`
    align-items: center;    
    background-color: initial;
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: center;
    width: 100%;
    
    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        justify-content: flex-start;
        background-color: var(--BackgroundColor)
    }
`;

const Twinkle = Styled(twinkle)`
    cursor: default;
    height: 52px;
    order: 1;
    width: 52px;

    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        height: 28px;
        width: 28px;        
    }
`;

const Close = Styled(close)`
    height: 10px;    
    width: 10px;

    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        height: 18px;
        width: 18px;        
    }
`;

const MainDiv = Styled.div`
    color: var(--LightTextColor);    
    cursor: default;
    flex-basic: 260px;
    font-family: GothamMedium;
    font-size: 30px;
    line-height: 52px;
    margin-top: 80px;
    margin-bottom: 187px;
    order: 2;
    text-align: center;

    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 0;
        margin-top: 56px;
    }
`;
const SpinnerDiv = Styled.div`
    position: absolute;
    display: none;
    bottom: 0px;

    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        display: block;
    }
`;

const DefaultSpan = Styled.span`font-family: NotoSansMedium;`;
const HighlightSpan = Styled(DefaultSpan)`
    color: var(--PrimaryColor);
    text-decoration: underline;
`;
const CloseSpan = Styled(DefaultSpan)`
    margin-left: 10px;
    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        display: none;
    }
`;

const CloseButton = Styled.button`
    background-color: inherit;
    border: 0;
    color: var(--DarkTextColor);
    cursor: pointer;
    font-family: NotoSansMedium;
    font-size: 18px;
    height: auto;
    order: 3;
    width: auto;

    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        order: 0;
        align-self: flex-end;
        height: 18px;
        margin-top: 20px;
        margin-right: 20px;
        margin-bottom: 78px;
        width: 18px;
    }
`;

function LoadingContainer(props: LoadingContainerProps) {
  const {
    address,
    transitMode,
    minTime,
    maxTime,
    closeCallback = undefined,
  } = props;
  return (
    <Container id="loadingContainer">
      <Twinkle />
      <MainDiv>
        <HighlightSpan>{address}</HighlightSpan>까지
        <br />
        <HighlightSpan>{transitMode}</HighlightSpan>로<br />
        <HighlightSpan>{minTime}분-{maxTime}분 이내</HighlightSpan>의<br />
        ZONE들을
        <br />
        검색하고 있어요!
      </MainDiv>
      <CloseButton onClick={closeCallback}>
        <Close />
        <CloseSpan>끝내기</CloseSpan>
      </CloseButton>
      <SpinnerDiv>
        <LoadingSpinner width="237px" height="237px" />
      </SpinnerDiv>
    </Container>
  );
}

export default LoadingContainer;
