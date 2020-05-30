import axios from "axios";

export type RoomObj = {
  code: number;
  data: Array<Room>;
};

export type Room = {
  id: number;
  name: string;
  zipcode: number;
  address: string;
  roomType: string;
  img: null | string;
  buildingType: null | string;
  loanType: string;
  deposit: number;
  registerId: number;
  monthlyPayment: number;
  location: {
    lat: number;
    lng: number;
  };
};

export async function getRooms(payload: number) {
  const response = await axios.get<RoomObj>(
    process.env.REACT_APP_API_URL + `/rooms/byRegistration/?zoneId=${payload}`
  );
  return response.data.data;
}
