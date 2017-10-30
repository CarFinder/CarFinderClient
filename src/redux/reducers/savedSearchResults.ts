import { FETCH_SAVED_SEARCH_RESULTS, SET_SAVED_SEARCH_RESULTS } from '../actions/actionTypes';
import { SavedSearchResultsAction } from '../actions/savedSearchResultsActions';
import { InitialState } from '../models/savedSearchResultsModel';

const initialState: InitialState = {
  savedSearchResults: []
};

export default function savedSearchResultsReducer(
  state: InitialState = initialState,
  action: SavedSearchResultsAction
): InitialState {
  switch (action.type) {
    case FETCH_SAVED_SEARCH_RESULTS:
      return state;
    case SET_SAVED_SEARCH_RESULTS:
      return action.payload;
    default:
      return state;
  }
}
