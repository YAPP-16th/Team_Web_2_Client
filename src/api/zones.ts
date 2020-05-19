import axios from "axios";

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
  rooms: [];
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
    process.env.REACT_APP_API_URL + `/zones?address=${address}&addressTag=${addressTag}&maxTime=${maxTime}&minTime=${minTime}&${transitQueryString}transferLimit=${transferLimit}`
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
    process.env.REACT_APP_API_URL + `/test/zones?address=${address}&addressTag=${addressTag}&maxTime=${maxTime}&minTime=${minTime}&${transitQueryString}transferLimit=${transferLimit}`
  );
  return response.data;
}
