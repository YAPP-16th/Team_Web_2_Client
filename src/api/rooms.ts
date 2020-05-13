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
    `http://testloadbalancer-546010974.ap-northeast-2.elb.amazonaws.com/rooms/byRegistration/?zoneId=${payload}`
  );
  return response.data.data;
}
