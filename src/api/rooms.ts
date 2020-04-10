import axios from 'axios';

export type Room = {
  name: string;
  description: string;
  coordinate: { latitude: number, longitude: number };
  buildingType: "빌라" | "주택" | "아파트";
  livingType: "월세" | "전세" | "하숙?";
  monthlyPayment: number;
  deposit: number;
}

export type Zone = { 
  latitude: number; 
  longitude: number; 
  radius: number; 
}

export async function getRooms (payload: Zone) {
  const response = await axios.get<Room[]>(`url`);  
  return response.data;
}

