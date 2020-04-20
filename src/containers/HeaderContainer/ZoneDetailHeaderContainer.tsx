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
  { name: "주거환경", to: "surrounding" },
  { name: "교통편", to: "transportation" },
  { name: "매물", to: "realestate" },
];

const StickyTabs = styled.div`
  display: flex;
  > * {
    flex: 1;
  }
`;

const HeaderContainerWrapper = styled.div`
  position: sticky;
  top: 100px;
`;

const ZoneDetailHeaderContainer = ({ history, location }: RouteComponentProps) => {

  // Handlers
  const goToSearchPageHandler = () => history.push('/search/' + location.search);

  console.log(location.hash);

  const tabItems = sections.map((section) => {
    return (
      <div key={section.name}>
        <TabItem to={section.to}>{section.name}</TabItem>
      </div>
    );
  });

  const id = location.hash.split('/')[3];

  return (
    <HashRouter basename={`/zone/${id}`}>
      <HeaderContainerWrapper>
        <Toolbar
          leftContents={<Icon onClick={goToSearchPageHandler} icon="back" size="13px"/>}
        />
        <ZoneDetailHeaderInfo address={address} zoneCode={zoneCode} />
        <StickyTabs>{tabItems}</StickyTabs>
      </HeaderContainerWrapper>
    </HashRouter>
  );
};

export default withRouter(ZoneDetailHeaderContainer);
