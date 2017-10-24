import { Filter } from '../models/savedSearchModel';
import * as actionTypes from './actionTypes';

export interface FetchSavedFilters {
  type: actionTypes.FETCH_SAVED_FILTERS;
}

export interface SetSavedSearchFilters {
  type: actionTypes.SET_SAVED_SEARCH_FILTERS;
  payload: Filter[];
}

export type SavedSearchAction = FetchSavedFilters | SetSavedSearchFilters;

export function fetchSavedFilters(): FetchSavedFilters {
  return {
    type: actionTypes.FETCH_SAVED_FILTERS
  };
}

export function setSavedSearchFilters(payload: Filter[]): SetSavedSearchFilters {
  return {
    type: actionTypes.SET_SAVED_SEARCH_FILTERS,
    payload
  };
}
