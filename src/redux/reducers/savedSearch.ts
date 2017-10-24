import { FETCH_SAVED_FILTERS, SET_SAVED_SEARCH_FILTERS } from '../actions/actionTypes';
import { SavedSearchAction } from '../actions/savedSearchActions';
import { SavedSearch } from '../models/savedSearchModel';

const initialState = {
  savedFilters: []
};

export default function savedSearchReducer(
  state: SavedSearch = initialState,
  action: SavedSearchAction
): SavedSearch {
  switch (action.type) {
    case FETCH_SAVED_FILTERS:
      return state;
    case SET_SAVED_SEARCH_FILTERS:
      return state;
    default:
      return state;
  }
}
