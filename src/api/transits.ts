import axios from "axios";

export type TransitObj = {
  code: number;
  data: Array<Transit>;
};

export type Transit = {
  firstStation: string;
  firstStationLine: number;
  transitCount: string;
  vehicleTypes: Array<string>;
  distance: {
    text: string;
    value: number;
  };
  time: number;
};

export type TransitQuery = {
  startLocation?: {
    lat: number;
    lng: number;
  };
  destLocation?: {
    lat: number;
    lng: number;
  };
  zoneId?: number;
  mode: "LocationToLocation" | "LocationToZone" | "ZoneToLocation";
};

export async function getTransits({
  startLocation,
  destLocation,
  zoneId,
  mode,
}: TransitQuery) {
  let response;

  switch (mode) {
    case "LocationToLocation":
      if (destLocation && startLocation) {
        response = await axios.get<TransitObj>(
          `http://testloadbalancer-546010974.ap-northeast-2.elb.amazonaws.com/transit/LocationToLocation?destinationLat=${destLocation.lat}&destinationLng=${destLocation.lng}&${startLocation.lat}&startLng=${startLocation.lng}`
        );
      }
      break;
    case "LocationToZone":
      if (startLocation) {
        response = await axios.get<TransitObj>(
          `http://testloadbalancer-546010974.ap-northeast-2.elb.amazonaws.com/transit/LocationToZone?destinationZoneId=${zoneId}&startLat=${startLocation.lat}&startLng=${startLocation.lng}`
        );
      }
      break;
    case "ZoneToLocation":
      if (destLocation) {
        response = await axios.get<TransitObj>(
          `http://testloadbalancer-546010974.ap-northeast-2.elb.amazonaws.com/transit/ZoneToLocation?destinationLat=${destLocation.lat}&destinationLng=${destLocation.lng}&startZoneId=${zoneId}`
        );
      }
      break;

    default:
      break;
  }

  return response?.data.data;
}
