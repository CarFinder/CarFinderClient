import { SET_FILTER_RESULTS } from '../actions/actionTypes';
import { FilterResultsAction } from '../actions/filterResultsActions';
import { FilterResults, InitialState } from '../models/filterResultsModel';

const initialState = {
  filterResults: []
};

export default function filterResultsReducer(
  state: InitialState = initialState,
  action: any
): InitialState {
  switch (action.type) {
    case SET_FILTER_RESULTS:
      return {
        ...state,
        filterResults: action.payload
      };
    default:
      return state;
  }
}
