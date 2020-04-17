import React from "react";
import styled from "styled-components";
import { FlexBoxSpacer } from "../../utils/utilComponents";

// Icon
import Icon from '../Icon/Icon';

type ToolbarProps = {

};

const ToolbarWrapper = styled.header`
  padding: 18px 20px;
  backgroundColor: var(--BackgroundColor);
  position: sticky;
  top: 0;
  color: var(--GreyTextColor);
`;

const ToolbarContent = styled.nav`
  display: flex;
  align-items: center;
`;

const ToolbarLeftItem = styled.div`

`;

const ToolbarRightItem = styled.div`

`;

const Toolbar = ({}: ToolbarProps) => {
  return (
    <ToolbarWrapper>
      <ToolbarContent>
        <ToolbarLeftItem>
          L
          {/* <Icon /> */}
        </ToolbarLeftItem>
        <FlexBoxSpacer />
        <ToolbarRightItem>
          R
          {/* <Icon />
          <Icon /> */}
        </ToolbarRightItem>
      </ToolbarContent>
    </ToolbarWrapper>
  );
};

export default Toolbar;
