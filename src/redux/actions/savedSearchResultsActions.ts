import { SavedSearchResults } from '../models/savedSearchResultsModel';
import * as actionTypes from './actionTypes';

export interface FetchSavedSearchResults {
  type: actionTypes.FETCH_SAVED_SEARCH_RESULTS;
}

export interface SetSavedSearchResults {
  type: actionTypes.SET_SAVED_SEARCH_RESULTS;
  payload: SavedSearchResults;
}

export interface RemoveAllSavedFilters {
  type: actionTypes.REMOVE_ALL_SAVED_FILTERS;
}

export interface RemoveSavedFilterById {
  type: actionTypes.REMOVE_SAVED_FILTER;
  payload: string;
}

export type SavedSearchResultsAction =
  | FetchSavedSearchResults
  | SetSavedSearchResults
  | RemoveAllSavedFilters
  | RemoveSavedFilterById;

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

export function removeAllSavedFilters(): RemoveAllSavedFilters {
  return {
    type: actionTypes.REMOVE_ALL_SAVED_FILTERS
  };
}

export function removeSavedFilterById(filterId: string): RemoveSavedFilterById {
  return {
    type: actionTypes.REMOVE_SAVED_FILTER,
    payload: filterId
  };
}
