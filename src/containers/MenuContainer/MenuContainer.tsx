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
    justify-content: center;
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
    padding-bottom: 110px;

    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        padding-bottom: 46px;
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
    font-size: 30px;
    line-height: 39px;
    width: 100%;
    height: 270px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
  
    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        font-size: 22px;
        height: 204px;
    }
`;

const MenuItem = Styled.span`
    cursor: pointer;
    width: fit-content;
    margin-left: 60px;
`;

const CloseDiv = Styled.div`
    align-self: flex-end;
    background-color: inherit;
    border: 0;
    height: auto;
    width: auto;
    margin-top: 46px;
    margin-right: 20px;
    margin-bottom: 140px;
  
    @media only screen and (max-width: ${DEVICE_SIZE.mobile}) {
        margin-top: 23px;
        margin-right: 20px;
        margin-bottom: 73px;
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
