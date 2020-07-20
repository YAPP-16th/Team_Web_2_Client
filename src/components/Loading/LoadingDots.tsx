import React from "react";
import styled, { keyframes } from "styled-components";

export type LoadingDotsProps = {
  size?: string;
  color?: string;
};

const bouce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
`;

const LoadingDots = ({ size, color }: LoadingDotsProps) => {
  const LoadingDotsWrapper = styled.div`
    display: flex;
    justify-content: center;
    > div {
      width: ${size ? size : "1.4rem"};
      height: ${size ? size : "1.4rem"};
      background-color: ${color ? color : "rgba(grey, 0.6)"};
      border-radius: 50%;
      display: inline-block;
      animation: ${bouce} 1.5s infinite ease-in-out both;
    }

    .bounce-1 {
      margin-right: 0.3rem;
    }
    .bounce-2 {
      margin-right: 0.3rem;
      animation-delay: 0.15s;
    }
    .bounce-3 {
      animation-delay: 0.3s;
    }
  `;

  return (
    <LoadingDotsWrapper>
      <div className="bounce-1"></div>
      <div className="bounce-2"></div>
      <div className="bounce-3"></div>
    </LoadingDotsWrapper>
  );
};

export default LoadingDots;