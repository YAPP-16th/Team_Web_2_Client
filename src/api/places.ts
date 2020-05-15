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
    `http://testloadbalancer-546010974.ap-northeast-2.elb.amazonaws.com/places?zoneId=${payload}`
  );
  return response.data.data;
}



