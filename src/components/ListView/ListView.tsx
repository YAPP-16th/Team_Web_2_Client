import React from "react";
import styled from "styled-components";

import ListViewItem, { ListViewItemProps } from "../ListViewItem/ListViewItem";

type ListViewProps = {
	/** 리스트가 활용할 배열 데이터*/
	items: Array<ListViewItemProps>;
};

const ListViewWrapper = styled.div`
	
`;

const ListView = ({ items }: ListViewProps) => {

	const itemList = items.map(item => {
		return <ListViewItem zoneCode={item.zoneCode} zoneName={item.zoneName} distance={item.distance} />
	})

  return (
    <ListViewWrapper>
			{itemList}
    </ListViewWrapper>
  );
};

export default ListView;
