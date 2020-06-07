import React from "react";
import Styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import FooterContainer from "./MenuFooterContainer";
import ModalHooks from "../../components/Modal/ModalHooks";
import Icon from "../../components/Icon/Icon";

interface MenuContainerProps {
  closeCallback?: () => void | undefined;
}

const DEVICE_SIZE = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
};

const Container = Styled.div`
    align-items: center;
    background-color: var(--BackgroundColor);
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: flex-start;
    width: 100%;
    
    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        justify-content: flex-start;
    }
`;

const InnerContainer = Styled.div`
    width: 100%;
    min-width: 280px;
    max-width: 1135px;
    height: 100%;
    max-height: 1080px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    padding-bottom: 6.875rem;

    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        padding-bottom: 2.875rem;
    }
`;

const MainContainer = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const MenuListView = Styled.div`
    color: var(--LightTextColor);    
    cursor: default;
    font-family: NotoSansMedium;
    font-size: 1.875rem;
    line-height: 2.438rem;
    width: 100%;
    height: 270px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
  
    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        font-size: 1.375rem;
        height: 204px;
    }
`;

const MenuItem = Styled.span`
    cursor: pointer;
    width: fit-content;
    margin-left: 3.75rem;
`;

const CloseDiv = Styled.div`
    align-self: flex-end;
    background-color: inherit;
    border: 0;
    height: auto;
    width: auto;
    margin-top: 2.875rem;
    margin-right: 1.25rem;
    margin-bottom: 8.75rem;
  
    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        margin-top: 1.438rem;
        margin-right: 1.25rem;
        margin-bottom: 4.563rem;
    }
`;

function MenuContainer(props: MenuContainerProps) {
  const { closeCallback } = props;
  const history = useHistory();
  const location = useLocation();
  const { closeModal } = ModalHooks();

  const itemClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    const { hash, pathname, search } = location;
    const target = event.target as HTMLElement;

    switch (target.id) {
      case "menu-search":
        (pathname !== "/search" || search) && history.push("/search");
        break;
      case "menu-service":
        (hash || pathname !== "/" || search) && history.push("/");
        break;
      case "menu-notice":
      case "menu-inquire":
      default:
        break;
    }
    closeModal();
  };

  return (
    <Container id="MenuContainer">
      <InnerContainer>
        <MainContainer>
          <CloseDiv>
            <Icon
              icon="close"
              size={23}
              cursor="pointer"
              onClick={closeCallback}
            />
          </CloseDiv>
          <MenuListView>
            <MenuItem id="menu-search" onClick={itemClick}>
              찾아 ZONE
            </MenuItem>
            <MenuItem id="menu-service" onClick={itemClick}>
              서비스 소개
            </MenuItem>
            <MenuItem id="menu-notice" onClick={itemClick}>
              공지사항
            </MenuItem>
            <MenuItem id="menu-inquire" onClick={itemClick}>
              문의하기
            </MenuItem>
          </MenuListView>
        </MainContainer>
        <FooterContainer />
      </InnerContainer>
    </Container>
  );
}

export default MenuContainer;
