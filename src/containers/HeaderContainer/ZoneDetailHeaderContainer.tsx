import React from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps, HashRouter } from 'react-router-dom';

// Components
import Toolbar from "../../components/Toolbar/Toolbar";
import Icon from '../../components/Icon/Icon';

// Dummy Data


const HeaderContainerWrapper = styled.div`
  max-width: 1120px;
  width: 100%;
`;

const ZoneDetailHeaderContainer = ({ history, location }: RouteComponentProps) => {
  // Handlers
  const goToSearchPageHandler = () => history.goBack();

  const id = location.hash.split('/')[2];

  return (
    <HashRouter basename={`/zone/${id}`}>
      <HeaderContainerWrapper>
        <Toolbar
          leftContents={<Icon testId="go-back" onClick={goToSearchPageHandler} icon="back" size="13px" cursor="pointer"/>}
        />
      </HeaderContainerWrapper>
    </HashRouter>
  );
};

export default withRouter(ZoneDetailHeaderContainer);
