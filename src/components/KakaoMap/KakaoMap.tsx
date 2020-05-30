import React from "react";
import styled, { keyframes } from "styled-components";

type KakaoMapProps = {
  width?: string;
  height?: string;
};

const KakaoMap = ({}: KakaoMapProps) => {
  return (
    <>
      <input type="text" id="sample5_address" placeholder="주소" />
      <input type="button" value="주소 검색" />
      <div id="map"></div>
      <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
      <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e17a60179d0aa90f75bf071648aa9dfb&libraries=services"></script>
      <script></script>
    </>
  )
}


