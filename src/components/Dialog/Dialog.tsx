import React from 'react';
import styled from 'styled-components';

type DialogProps = {
  click?: () => void;
  className: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  show: boolean;
};

const Dialog = ({
  click,
  className,
  backgroundColor,
  children,
  show,
}: DialogProps) => {
  const DialogWrapper = styled.div<{ show: boolean, backgroundColor: string | undefined; }>`
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
      show={show}
      onClick={click}
      className={className}
    >
      {children}
    </DialogWrapper>
  );
};

export default Dialog;
