import axios from "axios";

export type PlaceVoItem = {
  categoryName: string,
  placeName: string,
  address: string,
  distance: string
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
    process.env.REACT_APP_API_URL + `/places?zoneId=${payload}`
  );
  return response.data.data;
}



