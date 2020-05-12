import axios from 'axios';

export type RoomObj = {
  code: number;
  data: Array<Room>
}

export type Room = {
  id: string | number;
  zipcode: number;
  address: string;
  location: {
    lat: number;
    lng: number;
  }
}

export type Zone = { 
  latitude: number; 
  longitude: number; 
  radius: number; 
}

export async function getRooms (payload: number) {
  const response = await axios.get<RoomObj>(`http://testloadbalancer-153098121.ap-northeast-2.elb.amazonaws.com/rooms/byPrice/?zoneId=${payload}`);
  return response.data;
}

