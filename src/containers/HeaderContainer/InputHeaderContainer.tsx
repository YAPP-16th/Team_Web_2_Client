import React, { useCallback } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";

// Components
import Toolbar from "../../components/Toolbar/Toolbar";
import InputIcon from "../../components/Icon/InputIcon";

type DefaultHeaderContainerProps = {
  displayLogo?: boolean;
}

interface RightContentsProps {
  history: any;
  location: any;
}

const HeaderContainerWrapper = styled.div`
  max-width: 1120px;
  width: 100%;
`;

const RightContentsWrapper = styled.div`
  display: flex;
  width: 48px;
  height: 27px;
  font-family: NotoSansCJKkr;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
  text-align: right;
  color: #5e5e5e;
  cursor: pointer;
  > div {
    :not(:last-child) {
      margin-right: 22px;
    }
  }
  @media only screen and (max-width: 1024px) {
    display: none;
`;

const rightContents = (props: RightContentsProps) => {
  const { history } = props;

  const finishClick = () => {
    alert("홈 화면으로 돌아갑니다. 변경사항은 저장됩니다.");
    history.push("/");
  };

  return (
    <RightContentsWrapper>
      <div onClick={finishClick}>끝내기</div>
    </RightContentsWrapper>
  );
};

const InputHeaderContainer = ({ displayLogo }: DefaultHeaderContainerProps) => {
  let history = useHistory();
  let location = useLocation();

  return (

    <HeaderContainerWrapper>
      <Toolbar
        leftContents={
          <InputIcon
            testId="go-back"
            icon="simplifiedLogo"
            mobileIcon="back"
            size="27px"
            cursor="pointer"
          />
        }
        rightContents={rightContents({ history, location })}
      />
    </HeaderContainerWrapper>
  );
};

InputHeaderContainer.defaultProps = {
  displayLogo: true
}

export default InputHeaderContainer;
