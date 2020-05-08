import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import naverkey from "./naverkey.json";
import "./map.scss";

declare global {
  interface Window {
    naver: any;
  }
}

interface DivProps {
  height?: string;
  width?: string;
}

interface MapProps {
  id?: string;
  data?: Array<data>;
  roomClick?: Function;
  clusterClick?: Function;
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

const DEFAULT_LOCATION: { x: string; y: string } = {
  x: "37.3595704",
  y: "127.105399",
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
 * @param style : json형태의 custom style
 */
function ZoneMap(props: MapProps) {
  const { id = "map", data = [] } = props;
  const [zones, setZones] = useState(new Map<number, Zone>());
  let bShowPolygon: boolean = false;
  let naverMapAPI: any;

  const createPolygon = (props: naverLatLng[] | naverLatLng[][]) => {
    let ret: any[] = [];
    const { naver } = window;
    if (
      props.every((value: naverLatLng | naverLatLng[]) => !Array.isArray(value))
    ) {
      ret.push(
        new naver.maps.Polygon({
          map: naverMapAPI,
          paths: [props],
          fillColor: "#69F4F9",
          fillOpacity: 0.0,
          strokeColor: "#E51D1A",
          strokeOpacity: 0.0,
          strokeWeight: 3,
          clickable: true,
        })
      );
    } else {
      props.forEach((value: any) => {
        ret.push(createPolygon(value));
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
            strokeOpacity: 0.6,
            fillOpacity: 0.3,
          });
        } else {
          value.setOptions({
            strokeOpacity: 0.0,
            fillOpacity: 0.0,
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
    x: string | number,
    y: string | number
  ) => {
    const { naver } = window;
    naverMapAPI = new naver.maps.Map(parent, {
      center: new naver.maps.LatLng(x, y),
      zoom: 12,
      keyboardShortcuts: false,
      zoomControl: true,
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
                const roomProps = { id: value.id };
                props.roomClick(roomProps);
              }
            });
            return marker;
          }),
        ];

        //2. 폴리곤 생성하기
        const polygon = createPolygon(createPolygonPaths(obj.polygon));
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

    naverMapAPI.getElement().onclick = function (event: MouseEvent) {
      event.preventDefault();
      event.stopPropagation();

      const { id } = event.target as HTMLElement;

      if (MAKER_ID.some((makerID) => id === makerID)) {
        const target = event.target as HTMLElement;
        target.focus();
        if (props.clusterClick) {
          const { _clusters } = cluster;
          let clusterProps = null;
          _clusters.forEach((element: any) => {
            const { eventTarget } = element._clusterMarker;
            if (eventTarget === target) {
              clusterProps = element._clusterMember.map(
                (value: any) => value._zoneID
              );
            }
          });
          props.clusterClick(clusterProps);
        }
      }
    };

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
        const x = data ? data[0].x : DEFAULT_LOCATION.x;
        const y = data ? data[0].y : DEFAULT_LOCATION.y;

        naverAPI.onload = null;

        createNaverMap(id, x, y);

        MakerClustering.type = "text/javascript";
        MakerClustering.src = "./MarkerClustering.js";
        MakerClustering.onload = MakerClusteringCallback;
        headers.appendChild(MakerClustering);
      }
    };

    naverAPI.type = "text/javascript";
    naverAPI.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=" +
      naverkey.key;
    naverAPI.onload = naverMapCallback;

    headers.appendChild(naverAPI);
  };

  useEffect(() => {
    const { naver } = window;
    if (!naver && !zones.size) {
      loadAPI();
    } else {
      if (!naverMapAPI) {
        const x = data ? data[0].x : DEFAULT_LOCATION.x;
        const y = data ? data[0].y : DEFAULT_LOCATION.y;

        createNaverMap(id, x, y);
        initMap();
      }
    }
  });

  return <MapContainer id={id} style={props.style}></MapContainer>;
}

export default ZoneMap;
