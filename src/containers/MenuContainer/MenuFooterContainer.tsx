import React from "react";
import Styled from "styled-components";
import Icon from "../../components/Icon/Icon";

const DEVICE_SIZE = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
};

const Container = Styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: NotoSansMedium;

    @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
        justify-content: flex-start;
    }
    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        justify-content: flex-start;
    }
`;

const Column = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
const LeftRow = Styled.div<{ marginBottom?: number }>`
    width: 100%;
    margin-left: 60px;
    margin-bottom: ${(props) =>
      props.marginBottom && props.marginBottom + "px"};
    display: flex;
    align-items: center;

    @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
        display: none;
    }
    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        display: none;
    }
`;
const RightRow = Styled.div<{ width?: string; marginBottom?: number }>`
    width: "100%";
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    margin-bottom: ${(props) =>
      props.marginBottom && props.marginBottom + "px"};

    @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
        margin-left: 60px;
        justify-content: flex-start;
        margin-bottom: ${(props) =>
          props.marginBottom && props.marginBottom - 2 + "px"};
    }
    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        margin-left: 60px;
        justify-content: flex-start;
        margin-bottom: ${(props) =>
          props.marginBottom && props.marginBottom - 2 + "px"};
    }
`;

const LeftSpan = Styled.span<{ fontSize?: number; marginLeft?: string }>`
    display: inline-block;
    font-family: NotoSansMedium;
    font-size: ${(props) => (props.fontSize ? props.fontSize : 18)}px;
    color: ${(props) => (props.color ? props.color : "var(--DarkTextColor)")};
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "")};
    cursor: default;
`;
const RightSpan = Styled.span<{ underline?: boolean; hide?: boolean }>`
    display: inline-block;
    font-family: NotoSansMedium;
    font-size: 18px;
    color: var(--DarkTextColor);
    margin-left: 30px;
    cursor: pointer;
    text-decoration: ${(props) => (props.underline ? "underline" : "")};

    @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
        font-size: 13px;
        margin-left: 0;
        margin-right: 15px;
    }
    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        font-size: 12px;
        margin-left: 0;
        margin-right: 13px;
        display: ${(props) => props.hide && "none"};
    }
`;

const IconDiv = Styled.div`
    display: inline-block;
    margin-top: 3px;
`;

function FooterContainer() {
  return (
    <Container>
      <Column>
        <LeftRow marginBottom={12}>
          <IconDiv>
            <Icon icon="footerLogo" size={23} />
          </IconDiv>
          <LeftSpan
            fontSize={20}
            color="var(--GreyTextColor)"
            marginLeft="13px"
          >
            찾아존
          </LeftSpan>
        </LeftRow>
        <LeftRow>
          <LeftSpan>Copyright findmyzone. All Right Reserved.</LeftSpan>
        </LeftRow>
      </Column>
      <Column>
        <RightRow marginBottom={12}>
          <RightSpan>이용약관</RightSpan>
          <RightSpan>운영정책</RightSpan>
          <RightSpan>개인정보처리방침</RightSpan>
        </RightRow>
        <RightRow>
          <RightSpan hide>운영 및 제휴 문의</RightSpan>
          <RightSpan>위치기반서비스</RightSpan>
          <RightSpan underline={true}>Kakao 플러스친구</RightSpan>
        </RightRow>
      </Column>
    </Container>
  );
}

export default FooterContainer;
