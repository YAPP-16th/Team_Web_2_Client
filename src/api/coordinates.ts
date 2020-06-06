import axios from 'axios';

export type Coordinates = {
  x: number;
  y: number;
};

export type CoordinatesObj = {
  code: number;
  data: Coordinates;
  message: string;
};


export async function getCoordinates (payload: string) {
  const response = await axios.get<CoordinatesObj>(process.env.REACT_APP_SERVER + `/address/toLocation?address=${payload}`);
  return response.data.data;
}