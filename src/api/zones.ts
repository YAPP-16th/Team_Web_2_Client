import axios from "axios";
import { Room } from "./rooms";

export type ZoneObj = {
  code: number;
  data: Array<Zone>;
};

export type Zone = {
  id: number;
  zipcode: number;
  address: {
    address: string;
    sido: string;
    sigungu: string;
    dong: string | null | undefined;
  };
  lcation: {
    lat: number;
    lng: number;
  };
  x: number;
  y: number;
  polygon: Array<Array<Array<{ x: number; y: number }>>>;
  time: number;
  rooms: Array<Room>;
};

export type ZoneQuery = {
  address: string;
  addressTag: string;
  transferLimit: number;
  minTime: number;
  maxTime: number;
  transitMode: Array<string>;
};

export async function getZones({
  address,
  addressTag,
  transferLimit,
  minTime,
  maxTime,
  transitMode,
}: ZoneQuery) {
  let transitQueryString = "";
  for (let i of transitMode) {
    transitQueryString += "transMode=" + transitMode + "&";
  }
  const response = await axios.get<ZoneQuery>(
    `http://testloadbalancer-153098121.ap-northeast-2.elb.amazonaws.com/zones?address=${address}&addressTag=${addressTag}&maxTime=${maxTime}&minTime=${minTime}&${transitQueryString}transferLimit=${transferLimit}`
  );
  return response.data;
}

export async function testGetZones({
  address,
  addressTag,
  transferLimit,
  minTime,
  maxTime,
  transitMode,
}: ZoneQuery) {
  let transitQueryString = "";
  for (let i of transitMode) {
    transitQueryString += "transMode=" + transitMode + "&";
  }
  const response = await axios.get<ZoneQuery>(
    `http://testloadbalancer-153098121.ap-northeast-2.elb.amazonaws.com/test/zones?address=${address}&addressTag=${addressTag}&maxTime=${maxTime}&minTime=${minTime}&${transitQueryString}transferLimit=${transferLimit}`
  );
  return response.data;
}
