import React, { useEffect, useCallback } from "react";
import Styled from "styled-components";
import useModal from "./ModalHooks";

interface ModalProps {
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

function Modal(props: ModalProps) {
  const { backgroundColor = "" } = props;
  const modalHooks = useModal();
  const actionClose = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
      event.preventDefault();
      event.stopPropagation();

      const target = event.target as HTMLElement;
      if (target.id === DOM_ID.modal) {
        modalHooks.closeModal();
      }
    },
    [modalHooks]
  );

  useEffect(() => {
    const target = document.getElementsByTagName("html")[0];
    const { children } = target;
    for (let element of children) {
      if (element.tagName.toLocaleUpperCase() === "CANVAS") {
        element.remove();
      }
    }
  }, [modalHooks]);

  return (
    <Container
      id={DOM_ID.modal}
      bShow={modalHooks.bShow}
      backgroundColor={backgroundColor}
      onClick={actionClose}
    >
      {modalHooks.container}
    </Container>
  );
}

export default Modal;
