import { SavedSearchResults } from '../models/savedSearchResultsModel';
import * as actionTypes from './actionTypes';

export interface FetchSavedSearchResults {
  type: actionTypes.FETCH_SAVED_SEARCH_RESULTS;
}

export interface SetSavedSearchResults {
  type: actionTypes.SET_SAVED_SEARCH_RESULTS;
  payload: SavedSearchResults;
}

export type SavedSearchResultsAction = FetchSavedSearchResults | SetSavedSearchResults;

export function fetchSavedSearchResults(): FetchSavedSearchResults {
  return {
    type: actionTypes.FETCH_SAVED_SEARCH_RESULTS
  };
}

export function setSavedSearchResults(
  savedSearchResults: SavedSearchResults
): SetSavedSearchResults {
  return {
    type: actionTypes.SET_SAVED_SEARCH_RESULTS,
    payload: savedSearchResults
  };
}
