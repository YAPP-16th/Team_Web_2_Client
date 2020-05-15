import React from "react";
import Styled from "styled-components";
import useModal from "./ModalHooks";

interface ModalProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
}

interface ContainerProps {
  backgroundColor?: string;
  bShow?: boolean;
}

interface InnerContainerProps {
  width?: string;
  height?: string;
}

const DOM_ID = { modal: "Modal", conatiner: "ModalContainer" };

const Container = Styled.section<ContainerProps>`
    align-items: center;    
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : `rgba(0, 0, 0, 0.6)`};
    display: ${(props) => (props.bShow ? `flex` : `none`)};
    justify-content: center;
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: 10001;
`;

const InnerContainer = Styled.div<InnerContainerProps>`
    height: ${(props) => props.height};    
    position: absolute;
    width: ${(props) => props.width};
`;

const actionClose = (
  event: React.MouseEvent<HTMLElement, MouseEvent>
): void => {
  event.preventDefault();
  event.stopPropagation();

  const target = event.target as HTMLElement;
  if (target.id === DOM_ID.modal) {
    modalHooks.closeModal();
  }
};

let modalHooks: { [key: string]: any };

function Modal(props: ModalProps) {
  const { width = "500px", height = "500px" } = props;
  modalHooks = useModal();

  return (
    <Container id={DOM_ID.modal} bShow={modalHooks.bShow} onClick={actionClose}>
      <InnerContainer id={DOM_ID.conatiner} width={width} height={height}>
        {modalHooks.container}
      </InnerContainer>
    </Container>
  );
}

export default Modal;
