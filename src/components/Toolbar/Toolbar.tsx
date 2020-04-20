import React from "react";
import styled from "styled-components";
import { FlexBoxSpacer } from "../../utils/utilComponents";

// Icon
import Icon from '../Icon/Icon';

type ToolbarProps = {
  rightContents?: React.ReactNode;
  leftContents?: React.ReactNode;
};

const ToolbarWrapper = styled.header`
  padding: 18px 20px;
  backgroundColor: var(--BackgroundColor);
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

const Toolbar = ({ rightContents, leftContents }: ToolbarProps) => {
  return (
    <ToolbarWrapper>
      <ToolbarContent>
        <ToolbarLeftItem>
          {leftContents}
        </ToolbarLeftItem>
        <FlexBoxSpacer />
        <ToolbarRightItem>
          {rightContents}
        </ToolbarRightItem>
      </ToolbarContent>
    </ToolbarWrapper>
  );
};

export default Toolbar;
