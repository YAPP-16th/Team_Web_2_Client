import * as RequestAPI from "./rootAPI";

interface ZonesPorps {
  headers?: object;
  data?: object | string;
}

export async function getTestZones(props: ZonesPorps) {
  const { headers, data } = props;
  const url = "/test/zones";
  const res = await RequestAPI.get({ url, headers, data });
  return res.data;
}

export async function getZones(props: ZonesPorps) {
  const { headers, data } = props;
  const url = "/zones";
  const res = await RequestAPI.get({ url, headers, data });
  return res.data;
}
