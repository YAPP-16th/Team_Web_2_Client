import * as actions from './actions';
import { ActionType } from "typesafe-actions";
import { Room } from "../../api/rooms";

export type RoomsState = {
  rooms: {
    loading: boolean;
    error: Error | null;
    data: Room[];
  },
  selectedRoom: Room;
};

export type RoomsAction = ActionType<typeof actions>;