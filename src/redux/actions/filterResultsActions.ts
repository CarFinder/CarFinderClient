import { CarModel } from '../models/filterResultsModel';
import * as actionTypes from './actionTypes';

export interface SetFilterResults {
  type: actionTypes.SET_FILTER_RESULTS;
  payload: CarModel[];
}

export interface SetAdsAsLoaded {
  type: actionTypes.SET_ADS_AS_LOADED;
  payload: boolean;
}

export interface ClearFilterResults {
  type: actionTypes.CLEAR_FILTER_RESULTS;
}

export type FilterResultsAction = SetFilterResults | SetAdsAsLoaded | ClearFilterResults;

export function setFilterResults(filterResults: CarModel[]): SetFilterResults {
  return {
    type: actionTypes.SET_FILTER_RESULTS,
    payload: filterResults
  };
}

export function setAdsAsLoaded(loaded: boolean): SetAdsAsLoaded {
  return {
    type: actionTypes.SET_ADS_AS_LOADED,
    payload: loaded
  };
}

export function clearFilterResults(): ClearFilterResults {
  return {
    type: actionTypes.CLEAR_FILTER_RESULTS
  };
}
