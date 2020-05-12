import axios from 'axios';

export type TransitObj = {
  code: number;
  data: Array<Transit>
}

export type Transit = {
  firstStation: string | number;
  firstStationLine: number;
  transitCount: string;
  vehicleTypes: Array<string>
  time: number;
}

export type TransitQuery = {
  lat: number;
  lng: number;
  zoneId: number;
}

export async function getTransits ({lat, lng, zoneId}: TransitQuery) {
  const response = await axios.get<TransitObj>(`http://testloadbalancer-153098121.ap-northeast-2.elb.amazonaws.com/transit?lat=${lat}&lng=${lng}&zoneId=${zoneId}`);
  return response.data;
}
