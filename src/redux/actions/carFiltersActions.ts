import * as actionTypes from './actionTypes';

export interface ClearFilters {
  type: actionTypes.CLEAR_CAR_FILTERS;
}

export interface SetFilterValues {
  type: actionTypes.SET_FILTER_VALUES;
  payload: {
    marks?: any[];
    models?: any[];
    bodyTypes?: string[];
  };
}

export interface SetCurrentFilter {
  type: actionTypes.SET_CURRENT_FILTER;
  payload: any;
  sortingParams: any;
}

export interface FetchMarksValues {
  type: actionTypes.FETCH_MARKS_VALUES;
}

export interface SetMarksValues {
  type: actionTypes.SET_MARKS_VALUES;
  payload: any[];
}

export interface FetchModelsValues {
  type: actionTypes.FETCH_MODELS_VALUES;
  payload: string;
}

export interface SetModelsValues {
  type: actionTypes.SET_MODELS_VALUES;
  payload: any[];
}

export interface FetchBodyTypesValues {
  type: actionTypes.FETCH_BODY_TYPES_VALUES;
}

export interface SetBodyTypesValues {
  type: actionTypes.SET_BODY_TYPES_VALUES;
  payload: any[];
}

export interface SetSortingParams {
  type: actionTypes.SET_SORTING_PARAMS;
  payload: any;
}

export type CarFiltersActions =
  | ClearFilters
  | SetFilterValues
  | SetCurrentFilter
  | FetchMarksValues
  | SetMarksValues
  | FetchModelsValues
  | SetModelsValues
  | FetchBodyTypesValues
  | SetBodyTypesValues
  | SetSortingParams;

export function clearFilters(): ClearFilters {
  return { type: actionTypes.CLEAR_CAR_FILTERS };
}

export function setFilterValues(payload: any): SetFilterValues {
  return {
    type: actionTypes.SET_FILTER_VALUES,
    payload
  };
}

export function setCurrentFilter(payload: any, sortingParams: any): SetCurrentFilter {
  return {
    type: actionTypes.SET_CURRENT_FILTER,
    payload,
    sortingParams
  };
}

export function fetchMarksValues(): FetchMarksValues {
  return {
    type: actionTypes.FETCH_MARKS_VALUES
  };
}

export function setMarksValues(payload: any[]): SetMarksValues {
  return {
    type: actionTypes.SET_MARKS_VALUES,
    payload
  };
}

export function fetchModelsValues(mark: string): FetchModelsValues {
  return {
    type: actionTypes.FETCH_MODELS_VALUES,
    payload: mark
  };
}

export function setModelsValues(payload: any[]): SetModelsValues {
  return {
    type: actionTypes.SET_MODELS_VALUES,
    payload
  };
}

export function fetchBodyTypesValues(): FetchBodyTypesValues {
  return {
    type: actionTypes.FETCH_BODY_TYPES_VALUES
  };
}

export function setBodyTypesValues(payload: any[]): SetBodyTypesValues {
  return {
    type: actionTypes.SET_BODY_TYPES_VALUES,
    payload
  };
}

export function setSortingParams(payload: any): SetSortingParams {
  return {
    type: actionTypes.SET_SORTING_PARAMS,
    payload
  };
}
