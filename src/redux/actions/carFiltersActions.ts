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

export interface FetchMarksValues {
  type: actionTypes.FETCH_MARKS_VALUES;
}

export interface SetMarksValues {
  type: actionTypes.SET_MARKS_VALUES;
  payload: string[];
}

export type CarFiltersActions =
  | ClearFilters
  | SetFilterValues
  | SetCurrentFilter
  | FetchMarksValues
  | SetMarksValues;

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

export function fetchMarksValues(): FetchMarksValues {
  return {
    type: actionTypes.FETCH_MARKS_VALUES
  };
}

export function setMarksValues(payload: string[]): SetMarksValues {
  return {
    type: actionTypes.SET_MARKS_VALUES,
    payload
  };
}
