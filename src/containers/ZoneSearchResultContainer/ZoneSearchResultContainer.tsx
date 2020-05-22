import React, {useCallback} from "react";
import Styled from "styled-components";
import Map, {
  RoomClickEvent,
  ClusterClickEvent,
  ZoneClickEvent,
} from "../../components/Map/Map";
import ListViewContainer from "../ListViewContainer/ListViewContainer";
import ZoneSearchResultInfo, {
  SearchData,
} from "../../components/ZoneInfo/SearchResultInfo";

interface ContainerProps {
  zonedata?: any;
  searchData?: SearchData;
}

const Container = Styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--BackgroundColor);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MapStyle = {
  width: "100%",
  height: "100%",
};

function ZoneSearchResultContainer(props: ContainerProps) {
  const { zonedata, searchData } = props;
  const { inputLocation = {}, data = [] } = zonedata;

  const RoomClickCallback = useCallback((props: RoomClickEvent) => {}, []);
  const ClusterClickCallback = useCallback((props: ClusterClickEvent) => {}, []);
  const ZoneClickCallback = useCallback((props: ZoneClickEvent) => {}, []);

  return (
    <Container>
      <ZoneSearchResultInfo
        itemCount={data.length}
        addedHeight="0px"
        searchData={searchData}
      />
      <Map
        style={MapStyle}
        startPoint={inputLocation}
        data={data}
        roomClick={RoomClickCallback}
        clusterClick={ClusterClickCallback}
        zoneClick={ZoneClickCallback}
      />
      <ListViewContainer data={data} />
    </Container>
  );
}

export default ZoneSearchResultContainer;
