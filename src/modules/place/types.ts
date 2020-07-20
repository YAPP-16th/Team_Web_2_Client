import * as actions from './actions';
import { Place } from '../../api/places';
import { ActionType } from "typesafe-actions";
import { AxiosError } from 'axios';

export type PlacesState = {
  loading: boolean;
  error: AxiosError | null;
  data: Array<Place>
};

export type PlacesAction = ActionType<typeof actions>;
