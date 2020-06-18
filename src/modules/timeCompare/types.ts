import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { TimeCompareItem } from '../../utils/TimeCompare/functions';

export type TimeCompareState = {
  setterMode: boolean;
  setterTarget: 'userAddress' | 'compareItemAddress';
  userAddress: string;
  compareItemAddress: string;
  userLocation: {
    lat: number;
    lng: number;
  };
  compareLocation: {
    lat: number;
    lng: number;
  };
  compareItemContents: TimeCompareItem[];
};

export type TimeCompareAction = ActionType<typeof actions>;
