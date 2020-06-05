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
    padding: 0;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 9999999999;
    background-color: var(--BackgroundColor);

    .postcode-iframe-wrapper {
      
      width: 700px;
    }
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
