import React from "react";
import Styled, { css, keyframes } from "styled-components";
import { ReactComponent as Spiner } from "../../assets/svgs/compass-spinner.svg";

interface RotateSpiner {
  width?: string;
  height?: string;
  speed?: number;
  animation?: string;
}

interface LoadingSpinner {
  id?: string;
  width?: string;
  height?: string;
  speed?: number;
  actionAnimation?: boolean;
  color?: string;
}

const rotate = keyframes`
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(360deg);
    }
`;

const Div = Styled.div<{ width: string; height: string }>`
    width:${(props) => props.width};
    height:${(props) => props.height};
`;

const rotateAnimation = (props: any) =>
  css`
    ${rotate} infinite ${props.speed}s linear;
  `;

const RotateSpiner = Styled(Spiner)<RotateSpiner>`
    position: absolute;
    top: 29%;
    width: ${(props) => props.width};
    height:${(props) => props.height};
    display: block;
    margin: auto;
    animation: ${(props) => props.animation === "true" && rotateAnimation};
    fill: ${props => props.color}
`;

function LoadingSpinner(props: LoadingSpinner) {
  const {
    id = "loadingSpinner",
    width = "100px",
    height = "100px",
    speed = 2,
    actionAnimation = true,
    color = "#5e5e5e42"
  } = props;
  
  return (
    <Div id={id} width={width} height={height}>
      <RotateSpiner
        width={width}
        height={height}
        speed={speed}
        animation={actionAnimation.toString()}
        color={color}
      ></RotateSpiner>
    </Div>
  );
}

export default LoadingSpinner;
