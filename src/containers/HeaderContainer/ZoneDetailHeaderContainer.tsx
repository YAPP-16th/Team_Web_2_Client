import React from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps, HashRouter } from 'react-router-dom';

// Components
import Toolbar from "../../components/Toolbar/Toolbar";
import ZoneDetailHeaderInfo from "../../components/HeaderInfo/CurrentItemInfo";
import TabItem from "../../components/TabItem/TabItem";
import Icon from '../../components/Icon/Icon';

// Dummy Data
const address = "강남구 역삼1동, 서울특별시";
const zoneCode = 301421;
const sections = [
  { name: "시간비교", to: "timecompare" },
  { name: "교통편", to: "transportation" },
  { name: "매물", to: "realestate" },
];

const HeaderContainerWrapper = styled.div`
  position: sticky;
  top: 100px;

  @media screen and (min-width: 1060px) {
    .header-info {
      margin-left: 9px;
      align-items: flex-start;

      > :nth-child(1) {
        margin-bottom: 86px;
        order: 2;
        font-size: 24px;
        padding-left: 10px;
      }

      > :nth-child(2) {
        margin-top: 100px;
        order: 1;
      }
    }

    .header-tabs {
      justify-content: flex-start;
      > * {
        flex: initial;
      }
    }

    .tab-item {
      a {
        font-size: 20px;
      }
    }
  }  

`;

const StickyTabs = styled.div`
  display: flex;
  > * {
    flex: 1;
  }
`;



const ZoneDetailHeaderContainer = ({ history, location }: RouteComponentProps) => {

  // Handlers
  const goToSearchPageHandler = () => history.push('/search/' + location.search);

  const tabItems = sections.map((section) => {
    return (
      <div className="tab-item" key={section.name}>
        <TabItem to={section.to} testId={section.to}>{section.name}</TabItem>
      </div>
    );
  });

  const id = location.hash.split('/')[2];

  return (
    <HashRouter basename={`/zone/${id}`}>
      <HeaderContainerWrapper>
        <Toolbar
          leftContents={<Icon testId="go-back" onClick={goToSearchPageHandler} icon="back" size="13px"/>}
        />
        <ZoneDetailHeaderInfo className="header-info" address={address} zoneCode={zoneCode} />
        <StickyTabs className="header-tabs">{tabItems}</StickyTabs>
      </HeaderContainerWrapper>
    </HashRouter>
  );
};

export default withRouter(ZoneDetailHeaderContainer);
