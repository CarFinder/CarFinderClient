import { GET_STATS, SET_STATS } from '../actions/actionTypes';
import { GetStatsAction } from '../actions/getStatsActions';
import { InitialState } from '../models/statsModel';

const initialState = {
  ads: 0,
  users: 0,
  models: 0
};

export default function getStatsReducer(
  state: InitialState = initialState,
  action: GetStatsAction
): InitialState {
  switch (action.type) {
    case GET_STATS:
      return state;
    case SET_STATS:
      return action.payload;
    default:
      return state;
  }
}
