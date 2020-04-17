import React from "react";
import styled from "styled-components";

type TabsProps = {
  items: Array<Object>;
};

const TabsWrapper = styled.div``;

const TabItem = styled.div`

`;

const Tabs = ({ items }: TabsProps) => {

  const tabItems = items.map(item => {
    return <TabItem>
    </TabItem>
  })

  return <TabsWrapper></TabsWrapper>;
};

export default Tabs;