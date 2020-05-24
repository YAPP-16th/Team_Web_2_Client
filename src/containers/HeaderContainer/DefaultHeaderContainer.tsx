import React, { useCallback } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";

// Components
import Toolbar from "../../components/Toolbar/Toolbar";
import Icon from "../../components/Icon/Icon";

// Hooks
import ModalHooks from "../../components/Modal/ModalHooks";
import MenuContainer from "../MenuContainer/MenuContainer";

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
  > div {
    :not(:last-child) {
      margin-right: 22px;
    }
  }
`;
const rightContents = (props: RightContentsProps) => {
  const { history, location } = props;
  const {
    bShow,
    container,
    openModal,
    closeModal,
    setContainer,
  }: any = ModalHooks();
  const menuContainer: any = (
    <MenuContainer
      closeCallback={() => {
        closeModal();
      }}
    />
  );

  const searchClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    const { pathname, search } = location;

    if (pathname !== "/search" || search) {
      history.push("/search");
    }
  };

  const menuClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();

    if (!container || !Object.is(container._owner, menuContainer._owner)) {
      setContainer(menuContainer);
    }

    if (!bShow) {
      openModal();
    } else {
      closeModal();
    }
  };

  return (
    <RightContentsWrapper>
      <Icon icon="search" size="18px" onClick={searchClick} cursor="pointer" />
      <Icon icon="menu" size="18px" onClick={menuClick} cursor="pointer" />
    </RightContentsWrapper>
  );
};

const DefaultHeaderContainer = () => {
  let history = useHistory();
  let location = useLocation();

  const goHomePageHandler = useCallback(() => {
    const { hash, pathname, search } = location;
    if (hash || pathname !== "/" || search) {
      history.push("/");
    }
  }, [history, location]);

  return (
    <HeaderContainerWrapper>
      <Toolbar
        leftContents={
          <Icon
            testId="go-home"
            onClick={goHomePageHandler}
            icon="simplifiedLogo"
            size="27px"
            cursor="pointer"
          />
        }
        rightContents={rightContents({ history, location })}
      />
    </HeaderContainerWrapper>
  );
};

export default DefaultHeaderContainer;
