import {
  CLEAR_FILTER_RESULTS,
  CLEAR_SELECTED_AD,
  SELECT_AD,
  SET_ADS_AS_LOADED,
  SET_FILTER_RESULTS
} from '../actions/actionTypes';
import { FilterResultsAction } from '../actions/filterResultsActions';
import { InitialState } from '../models/filterResultsModel';

const initialState: InitialState = {
  filterResults: [],
  allAdsLoaded: false,
  selectedAd:''
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
        ...state,
        filterResults: [],
        allAdsLoaded: false
      };
    case SET_ADS_AS_LOADED:
      return {
        ...state,
        allAdsLoaded: action.payload
      };
    case CLEAR_SELECTED_AD: 
      return {
        ...state,
        selectedAd:''
      };
    case SELECT_AD:
    return {
      ...state,
      selectedAd:action.payload
    };
    default:
      return state;
  }
}
