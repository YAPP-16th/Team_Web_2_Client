import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import "./Map.scss";

declare global {
  interface Window {
    naver: any;
  }
}

export interface ZoneClickEvent {
  clicked: boolean;
  zoneID: number;
}

export interface RoomClickEvent {
  roomID: number;
}

export interface ClusterClickEvent {
  zones: Array<number>;
}

interface DivProps {
  height?: string;
  width?: string;
}

interface MapProps {
  id?: string;
  startPoint?: { x: number; y: number };
  data?: Array<data>;
  roomClick?: Function;
  clusterClick?: Function;
  zoneClick?: Function;
  style?: object;
}

interface Zone {
  location: object;
  polygon: Array<object>;
  rooms: Array<object>;
}

interface data {
  id: number;
  x: number;
  y: number;
  polygon: Array<any>;
  rooms: Array<any>;
}

interface naverLatLng {
  x: number;
  y: number;
  _lat: number;
  _lng: number;
}

const DEFAULT_LOCATION: { x: number; y: number } = {
  x: 37.3595704,
  y: 127.105399,
};
const MAKER_ID: Array<string> = ["marker1", "marker2"];

const Div = Styled.div<DivProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const MapContainer = (props: { id: string; style: any }) => {
  const { id = "naverMap" } = props;
  const { width = "100%", height = "500px" } = props.style;

  return <Div id={id} width={width} height={height}></Div>;
};

/**
 * @param id : Map컴포넌트 최상위 DOM ID
 * @param data : [{id, x, y, polygon, rooms}]
 * @param roomClick : Room 마커 클릭 시 event bind 함수
 * @param clusterClick : cluster 클릭 시 event bind 함수
 * @param zoneClick : 폴리곤을 클릭 시 event bind 함수
 * @param style : json형태의 custom style
 */
function ZoneMap(props: MapProps) {
  const {
    id = "map",
    startPoint = { x: DEFAULT_LOCATION.x, y: DEFAULT_LOCATION.y },
    data = [],
    style = {},
    zoneClick = undefined,
  } = props;
  const [zones, setZones] = useState(new Map<number, Zone>());
  let bShowPolygon: boolean = false;
  let naverMapAPI: any;
  let clickedPolygonID: number = -1;

  const clickedPolygon = (bClick: boolean, polygons: any) => {
    if (polygons.every((value: any) => Array.isArray(value))) {
      polygons.forEach((value: any) => {
        clickedPolygon(bClick, value);
      });
    } else {
      let option = bClick
        ? {
            fillColor: "#ffff004d",
            strokeColor: "yellow",
          }
        : {
            fillColor: "var(--PrimaryColor)",
            strokeColor: "var(--PrimaryColor)",
          };
      polygons.forEach((value: any) => {
        value.setOptions(option);
      });
    }
  };

  const createPolygon = (
    id: number,
    paths: naverLatLng[] | naverLatLng[][]
  ) => {
    let ret: any[] = [];
    const { naver } = window;
    if (
      paths.every((value: naverLatLng | naverLatLng[]) => !Array.isArray(value))
    ) {
      const polygon = new naver.maps.Polygon({
        map: naverMapAPI,
        paths: [paths],
        fillColor: "var(--PrimaryColor)",
        fillOpacity: 0.3,
        strokeColor: "var(--PrimaryColor)",
        strokeOpacity: 0.5,
        strokeWeight: 3,
        clickable: true,
        visible: false,
      });
      polygon._ZoneID = id;
      naver.maps.Event.addListener(polygon, "click", (event: any) => {
        event.domEvent.preventDefault();
        event.domEvent.stopPropagation();

        const polygon = event.overlay;
        let bClicked = false;
        if (zones.has(polygon._ZoneID)) {
          if (clickedPolygonID < 0) {
            clickedPolygonID = polygon._ZoneID;
            bClicked = true;
            clickedPolygon(bClicked, zones.get(polygon._ZoneID)?.polygon);
          } else {
            if (clickedPolygonID === polygon._ZoneID) {
              clickedPolygonID = -1;
              clickedPolygon(bClicked, zones.get(polygon._ZoneID)?.polygon);
            } else {
              clickedPolygonID = polygon._ZoneID;
              bClicked = true;
              clickedPolygon(bClicked, zones.get(polygon._ZoneID)?.polygon);
            }
          }
        }

        if (zoneClick) {
          const eventInfo: ZoneClickEvent = {
            clicked: bClicked,
            zoneID: clickedPolygonID,
          };
          zoneClick(eventInfo);
        }
      });
      ret.push(polygon);
    } else {
      paths.forEach((value: any) => {
        ret.push(createPolygon(id, value));
      });
    }

    return ret;
  };

  const createPolygonPaths = (props: Array<naverLatLng>) => {
    let ret: Array<any> = [];
    const { naver } = window;
    props.forEach((value) => {
      if (Array.isArray(value)) {
        ret.push(createPolygonPaths(value));
      } else {
        ret.push(new naver.maps.LatLng(value.y, value.x));
      }
    });
    return ret;
  };

  const createMarker = (x: number, y: number) => {
    const { naver } = window;
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(x, y),
      draggable: false,
      clickable: true,
      map: naverMapAPI,
      visible: false,
    });
    return marker;
  };

  const showPolygon = (props: any) => {
    const { polygons, bShow } = props;
    bShowPolygon = bShow;
    polygons.forEach((value: any) => {
      if (Array.isArray(value)) {
        showPolygon({ polygons: value, bShow });
      } else {
        if (bShow) {
          value.setOptions({
            visible: true,
          });
        } else {
          value.setOptions({
            visible: false,
            fillColor: "var(--PrimaryColor)",
            strokeColor: "var(--PrimaryColor)",
          });
        }
      }
    });
  };

  const showMarker = (props: { markers: Array<any>; bShow: boolean }) => {
    const { markers, bShow } = props;
    markers.forEach((value) => value.setOptions({ visible: bShow }));
  };

  const createNaverMap = (
    parent: HTMLElement | string,
    x: number,
    y: number
  ) => {
    const { naver } = window;
    naverMapAPI = new naver.maps.Map(parent, {
      center: new naver.maps.LatLng(x, y),
      zoom: 12,
      keyboardShortcuts: false,
    });

    //검색 위치 표시하는 마커
    createMarker(x, y).setOptions({
      visible: true,
      icon: {
        content: [
          `<div id=startpoint style="width:16px; height: 16px; background-color:#000000; border-radius: 50%; display:flex; justify-content: center; align-items: center;">
            <div style="width:6px; height: 6px; background-color:#40aee1; border-radius: 50%">
            </div>
          </div>`,
        ].join(""),
      },
    });
  };

  const initMap = () => {
    const { naver } = window;
    data?.forEach((obj) => {
      if (!zones.has(obj.id)) {
        //0. 폴리곤 Marker(클러스터용)
        const location = createMarker(obj.x, obj.y);
        location._zoneID = obj.id;

        //1. Room생성하기
        const rooms = [
          ...obj.rooms.map((value) => {
            const marker = createMarker(value.location.lat, value.location.lng);
            naver.maps.Event.addListener(marker, "click", function (
              event: any
            ) {
              event.domEvent.preventDefault();
              event.domEvent.stopPropagation();
              if (props.roomClick) {
                const roomProps: RoomClickEvent = { roomID: value.id };
                props.roomClick(roomProps);
              }
            });
            return marker;
          }),
        ];

        //2. 폴리곤 생성하기
        const polygon = createPolygon(obj.id, createPolygonPaths(obj.polygon));
        setZones(zones.set(obj.id, { location, polygon, rooms }));
      }
    });

    const marker1 = {
        content: `<div id=${MAKER_ID[0]} class="marker1" tabindex="-1"></div>`,
      },
      marker2 = {
        content: `<div id=${MAKER_ID[1]} class="marker2" tabindex="-1"></div>`,
      };

    const cluster = new MarkerClustering({
      minClusterSize: 1,
      maxZoom: 15, //거리 Level
      map: naverMapAPI,
      markers: [...zones.values()].map((value) => value.location),
      disableClickZoom: true,
      gridSize: 120,
      icons: [marker1, marker2],
      indexGenerator: [2, 10],
      stylingFunction: function (clusterMarker: any, count: any) {
        const zoomLevel = naverMapAPI ? naverMapAPI.getZoom() : 17;
        if (zoomLevel < 15) {
          clusterMarker.getElement().lastChild.innerText = count;

          if (bShowPolygon) {
            bShowPolygon = false;
            showPolygon({
              polygons: [...zones.values()].map((value) => value.polygon),
              bShow: bShowPolygon,
            });
            showMarker({
              markers: [...zones.values()].map((value) => value.rooms).flat(),
              bShow: bShowPolygon,
            });
          }
        } else {
          if (!bShowPolygon) {
            bShowPolygon = true;
            showPolygon({
              polygons: [...zones.values()].map((value) => value.polygon),
              bShow: bShowPolygon,
            });
            showMarker({
              markers: [...zones.values()].map((value) => value.rooms).flat(),
              bShow: bShowPolygon,
            });
          }
        }
      },
    });

    naver.maps.Event.addDOMListener(
      naverMapAPI.getElement(),
      "click",
      (event: Event) => {
        event.preventDefault();
        event.stopPropagation();

        const { id } = event.target as HTMLElement;

        if (MAKER_ID.some((makerID) => id === makerID)) {
          const target = event.target as HTMLElement;
          target.focus();

          if (props.clusterClick) {
            const { _clusters } = cluster;
            let clusterProps: ClusterClickEvent = { zones: [] };
            _clusters.forEach((element: any) => {
              const { eventTarget } = element._clusterMarker;
              if (eventTarget === target) {
                clusterProps = {
                  zones: element._clusterMember.map(
                    (value: any) => value._zoneID
                  ),
                };
              }
            });
            props.clusterClick(clusterProps);
          }
        }
      }
    );

    return cluster;
  };

  const loadAPI = () => {
    const headers: HTMLHeadElement = document.getElementsByTagName("head")[0];
    const naverAPI = document.createElement("script");
    const MakerClustering = document.createElement("script");

    const MakerClusteringCallback = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();

      initMap();

      MakerClustering.onload = null;
    };

    const naverMapCallback = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      const { naver } = window;

      if (naver) {
        const x = startPoint.y;
        const y = startPoint.x;

        naverAPI.onload = null;

        createNaverMap(id, x, y);

        MakerClustering.type = "text/javascript";
        MakerClustering.src = "./openapi/MarkerClustering.js";
        MakerClustering.onload = MakerClusteringCallback;
        headers.appendChild(MakerClustering);
      }
    };

    naverAPI.type = "text/javascript";
    naverAPI.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=" +
      process.env.REACT_APP_NAVER_MAP_KEY;
    naverAPI.onload = naverMapCallback;

    headers.appendChild(naverAPI);
  };

  useEffect(() => {
    const { naver } = window;
    if (!naver && !zones.size) {
      loadAPI();
    } else {
      if (!naverMapAPI) {
        const x = startPoint.y;
        const y = startPoint.x;

        createNaverMap(id, x, y);
        initMap();
      }
    }
  });

  return <MapContainer id={id} style={style}></MapContainer>;
}

export default ZoneMap;
