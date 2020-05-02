import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';

// Components
import Toolbar from '../../components/Toolbar/Toolbar';
import Icon from '../../components/Icon/Icon';

// Dummy Data

const HeaderContainerWrapper = styled.div`
  position: sticky;
  top: 100px;
`;

const InputHeaderContainer = ({ history }: RouteComponentProps) => {
  // handlers
  const goHomePageHandler = () => history.push('/');

  return (
    <HeaderContainerWrapper>
      <Toolbar
        leftContents={
          <Icon
            testId="go-home"
            onClick={goHomePageHandler}
            icon="back"
            size="10px"
          />
        }
      />
    </HeaderContainerWrapper>
  );
};

export default withRouter(InputHeaderContainer);
