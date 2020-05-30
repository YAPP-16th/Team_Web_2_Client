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
  destinationLocation?: {
    lat: number;
    lng: number;
  };
  zoneId?: number;
  mode?: "LocationToLocation" | "LocationToZone" | "ZoneToLocation";
};

export async function getTransits({
  startLocation,
  destinationLocation,
  zoneId,
  mode,
}: TransitQuery) {
  let response;

  switch (mode) {
    case "LocationToLocation":
      if (destinationLocation && startLocation) {
        response = await axios.get<TransitObj>(
          process.env.REACT_APP_API_URL + `/transit/LocationToLocation?destinationLat=${destinationLocation.lat}&destinationLng=${destinationLocation.lng}&startLat=${startLocation.lat}&startLng=${startLocation.lng}`
        );
      }
      break;
    case "LocationToZone":
      if (startLocation) {
        console.log(startLocation, zoneId);
        response = await axios.get<TransitObj>(
          process.env.REACT_APP_API_URL + `/transit/LocationToZone?destinationZoneId=${zoneId}&startLat=${startLocation.lat}&startLng=${startLocation.lng}`
        );
      }
      break;
    case "ZoneToLocation":
      if (destinationLocation) {
        response = await axios.get<TransitObj>(
          process.env.REACT_APP_API_URL + `/transit/ZoneToLocation?destinationLat=${destinationLocation.lat}&destinationLng=${destinationLocation.lng}&startZoneId=${zoneId}`
        );
      }
      break;

    default:
      break;
  }

  return response?.data.data;
}
