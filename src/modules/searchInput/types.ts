import * as actions from "./actions";
import { ActionType } from "typesafe-actions";

export type SearchInputData = {
  address: string;
  addressTag: string;
  maxTime: number;
  minTime: number;
  transferLimit: number;
  transitMode: Array<string>;
  searchStep: number;
};

export type SearchInputState = {
  searchInputData: SearchInputData;
};

export type SearchInputAction = ActionType<typeof actions>;
