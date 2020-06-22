import * as actions from './actions';
import { Transit } from '../../api/transits';
import { ActionType } from "typesafe-actions";
import { AxiosError } from 'axios';

export type TransitsState = {
  loading: boolean;
  error: AxiosError | null;
  data: Array<Transit>
};

export type TransitsAction = ActionType<typeof actions>;
