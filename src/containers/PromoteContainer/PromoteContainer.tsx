import React from "react";
import Styled from "styled-components";
import Icon from "../../components/Icon/Icon";
import ModalHooks from "../../hooks/ModalHooks";

const DEVICE_SIZE = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
};

const Container = Styled.div`
  background-color: white;
  width: 22%;
  height: 50%;

  @media only screen and (max-width: ${DEVICE_SIZE.tablet}) {
    width: 60%;
    height: 40%;
  }
  
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    width: 80%;
    height: 60%;
  }
`;

const IconWrapper = Styled.div`
  float: right;
  margin-top: 5%;
  margin-right: 5%;
  cursor: pointer;
`

const TextWrapper = Styled.div`
  margin-left: 8%;
  margin-top: 10%;
  margin-right: 1%;
  @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
    margin-left: 8%;
    margin-top: 15%;
  }
`

const TopText = Styled.div`
  font-size: 1.5rem;
`

const MiddleText = Styled.div`
  font-size: 15px;
`

const BaseText = Styled.div`
  font-size: 15px;
  font-weight: bold;
`

const BtnWrapper = Styled.div`
  display: flex;
  font-size: 0.9rem;
  margin-top: 5%;
`

const NoBtn = Styled.div`
  border: 1px solid black; 
  width: 22%;
  height: 45px;
  margin-right: 3%;
  border-radius: 5px;
  color: grey;
  text-align: center;
  line-height: 45px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

const YesBtn = Styled.div`
  width: 110%;
  height: 45px;
  margin-right: 3%;
  border-radius: 5px;
  text-align: center;
  line-height: 45px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  background-color: var(--PrimaryColor);
  cursor: pointer;
  color: black;
`

const PromoteContainer = () => {
  const modal = ModalHooks();
  const closeHandler = () => {
    modal.closeModal();
  }
  return (
    <Container>
      <IconWrapper onClick={closeHandler}>
        <Icon
          icon="close"
          size={23}
          cursor="pointer"
        />
      </IconWrapper>
      <TextWrapper>
        <TopText>현재 찾아존은<br /> 베타 서비스입니다.</TopText>
        <br />
        <MiddleText>검색 결과가 정확하지 않음에도 불구하고 <br /> 이용해주신 점 감사드립니다!</MiddleText>
        <br />
        <BaseText>+ 더 나은 서비스가 만들어지면  <br /> 빠르게 알려드리려 하는데 사전신청 <br /> 해보시겠어요?</BaseText>
        <br />
        <BtnWrapper>
          <NoBtn onClick={closeHandler}>안할래요</NoBtn>
          <div onClick={() => window.location.assign("https://chajazone.typeform.com/to/f5wEhRkp")}>
            <YesBtn>30초만에 신청하기</YesBtn>
          </div>
        </BtnWrapper>
      </TextWrapper>
    </Container >
  )
}

export default PromoteContainer;
