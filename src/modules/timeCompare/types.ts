import * as actions from './actions';
import { ActionType } from "typesafe-actions";

export type TimeCompareState = {
  userLocation: {
    lat: number;
    lng: number;
  },
  compareLocation: {
    lat: number;
    lng: number;
  }
};

export type TimeCompareAction = ActionType<typeof actions>;
