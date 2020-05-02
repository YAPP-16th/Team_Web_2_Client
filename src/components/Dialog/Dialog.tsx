import React from 'react';
import styled from 'styled-components';

type DialogProps = {
  click?: () => void;
  className: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  display: boolean;
};

const Dialog = ({
  click,
  className,
  backgroundColor,
  children,
  display,
}: DialogProps) => {
  const DialogWrapper = styled.div<{ display: boolean, backgroundColor: string | undefined; }>`
    position: fixed;
    background-color: ${(props) => props.backgroundColor ? backgroundColor : 'rgba(0, 0, 0, 0.3'};
    width: 100%;
    height: 100%;
    z-index: 1000;
    padding: 30px;
    display: ${(props) => (props.display ? 'block' : 'none')};
  `;


  return (
    <DialogWrapper
      backgroundColor={backgroundColor}
      display={display}
      onClick={click}
      className={className}
    >
      {children}
    </DialogWrapper>
  );
};

export default Dialog;
