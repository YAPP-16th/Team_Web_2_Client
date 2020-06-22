import * as actions from './actions';
import { Room } from '../../api/rooms';
import { ActionType, Action } from "typesafe-actions";
import { AxiosError } from 'axios';

export type RoomsState = {
  loading: boolean;
  error: AxiosError | null;
  data: Array<Room>
};

export type RoomsAction = ActionType<typeof actions>;
