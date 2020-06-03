import React, { useEffect, useState, useCallback } from "react";
import {
  HashRouter,
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";

import queryString from "query-string";

// Page
import ZoneDetailPage from "../ZoneDetailPage/ZoneDetailPage";
import ZoneSearchResultContainer from "../../containers/ZoneSearchResultContainer/ZoneSearchResultContainer";

//Test
import { getTestZones } from "../../api/zoneAPI";
import LoadingContainer from "../../containers/LoadingContainer/LoadingContainer";
import ModalHooks from "../../components/Modal/ModalHooks";

interface loadingContainer {
  data: locationData;
  closeCallback?: () => void;
}

interface locationData {
  address: string;
  transitMode: string;
  minTime: number;
  maxTime: number;
}

const createLoadingContainer = (props: loadingContainer) => {
  const { data, closeCallback } = props;
  return (
    <LoadingContainer
      address={data.address}
      transitMode={data.transitMode}
      minTime={data.minTime}
      maxTime={data.maxTime}
      closeCallback={closeCallback}
    />
  );
};

const convertSearchInfoData = (params: any) => {
  const type = "회사";
  let transitMode = "";
  let transferLimit = "환승 여부 상관없음";

  switch (params.transitMode) {
    case "subway":
      transitMode = "지하철";
      break;
    case "bus":
      transitMode = "버스";
      break;
    default:
      transitMode = "지하철&버스";
      break;
  }

  switch (params.transferLimit) {
    case 0:
      transferLimit = "환승 없음";
      break;
    case 1:
      transferLimit = "1회 환승";
      break;
    case 2:
      transferLimit = "2회 환승";
      break;
    default:
      break;
  }

  return {
    type,
    address: params.address,
    transitMode,
    transferLimit,
    minTime: params.minTime,
    maxTime: params.maxTime,
  };
};

const ZoneSearchResultPage = () => {
  const [zoneData, setZoneData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const modal = ModalHooks();
  const params: any = queryString.parse(location.search);
  const searchData = convertSearchInfoData(params);

  const requestZones = useCallback(
    async (data: any) => {
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      };

      try {
        const res = await getTestZones({ headers, data });
        setZoneData({
          inputLocation: res.inputLocation,
          data: res.data.map((value: any) => {
            return {
              id: value.id,
              x: value.location.lat,
              y: value.location.lng,
              polygon: value.polygon,
              rooms: value.rooms,
              zoneCode: value.zipcode,
              zoneName: value.address.address,
              distance: value.distance,
            };
          }),
        });
        modal.closeModal();
      } catch (err) {
        alert(`Server에러 입니다. 다시 시도해 주세요.`);
      }
    },
    [modal]
  );

  useEffect(() => {
    if (location.hash && !location.hash.match(/zone/) && !zoneData.hasOwnProperty('data')) {
      const closeCallback = () => {
        const result = window.confirm("변경사항이 저장되지 않을 수 있습니다.");

        if (result) {
          history.goBack();
        }
      };

      modal.setContainer(
        createLoadingContainer({ data: params, closeCallback })
      );
      modal.openModal();
      requestZones(params);
    }
  }, [location.hash]);

  return (
    <HashRouter basename="/zone">
      <Switch>
        <Route exact path="/">
          {!modal.bShow && (
            <ZoneSearchResultContainer
              zonedata={zoneData}
              searchData={searchData}
            />
          )}
        </Route>
        <Route exact path="/:id/:feature" component={ZoneDetailPage} />
      </Switch>
    </HashRouter>
  );
};

export default ZoneSearchResultPage;
