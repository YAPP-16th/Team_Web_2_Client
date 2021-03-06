import axios from "axios";

export type PlaceVoItem = {
  categoryName: string,
  placeName: string,
  address: string,
  distance: string,
  placeUrl: string,
}

export type Place = {
  categoryName: string,
  size: number,
  placeVoList: PlaceVoItem[]
};

export type PlaceObj = {
  code: number;
  data: Array<Place>;
};


export async function getPlaces(payload: number) {
  const response = await axios.get<PlaceObj>(
    process.env.REACT_APP_SERVER + `/places?zoneId=${payload}`
  );
  return response.data.data;
}



