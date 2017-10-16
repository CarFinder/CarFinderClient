import * as actionTypes from './actionTypes';

export interface ClearFilters {
  type: actionTypes.CLEAR_CAR_FILTERS;
}

export interface SetFilterValues {
  type: actionTypes.SET_FILTER_VALUES;
  payload: {
    marks?: string[];
    models?: string[];
    bodyTypes?: string[];
    yearsRange?: number[];
  };
}

export interface SetCurrentFilter {
  type: actionTypes.SET_CURRENT_FILTER;
  payload: {
    mark?: string;
    model?: string;
    bodyType?: string;
    yearFrom?: number;
    yearTo?: number;
    priceForm?: number;
    priceTo?: number;
    kmsFrom?: number;
    kmsTo?: number;
  };
}

export interface FetchFilterValues {
  type: actionTypes.FETCH_FILTER_VALUES;
}

export type CarFiltersActions =
  | ClearFilters
  | SetFilterValues
  | SetCurrentFilter
  | FetchFilterValues;

export function clearFilters(): ClearFilters {
  return { type: actionTypes.CLEAR_CAR_FILTERS };
}

export function setFilterValues(payload: any): SetFilterValues {
  return {
    type: actionTypes.SET_FILTER_VALUES,
    payload
  };
}

export function setCurrentFilter(payload: any): SetCurrentFilter {
  return {
    type: actionTypes.SET_CURRENT_FILTER,
    payload
  };
}

export function fetchFilterValues(): FetchFilterValues {
  return {
    type: actionTypes.FETCH_FILTER_VALUES
  };
}
