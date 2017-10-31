import {
  CLEAR_FILTER_RESULTS,
  SET_ADS_AS_LOADED,
  SET_FILTER_RESULTS
} from '../actions/actionTypes';
import { FilterResultsAction } from '../actions/filterResultsActions';
import { InitialState } from '../models/filterResultsModel';

const initialState: InitialState = {
  filterResults: [],
  allAdsLoaded: false
};

export default function filterResultsReducer(
  state: InitialState = initialState,
  action: FilterResultsAction
): InitialState {
  switch (action.type) {
    case SET_FILTER_RESULTS:
      return {
        ...state,
        filterResults: [...state.filterResults.map(item => item), ...action.payload]
      };
    case CLEAR_FILTER_RESULTS:
      return {
        filterResults: [],
        allAdsLoaded: false
      };
    case SET_ADS_AS_LOADED:
      return {
        ...state,
        allAdsLoaded: action.payload
      };
    default:
      return state;
  }
}
