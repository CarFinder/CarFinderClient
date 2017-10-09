import * as actionTypes from './actionTypes';

export interface SetLoading {
  type: actionTypes.SET_LOADING;
  payload: boolean;
}

export interface SetAuthError {
  type: actionTypes.SET_AUTH_ERROR;
  payload: any;
}

export interface SetSearchError {
  type: actionTypes.SET_SEARCH_ERROR;
  payload: any;
}

export type FormStateAction = SetLoading | SetAuthError | SetSearchError;

export function setLoading(loadingState: boolean): SetLoading {
  return {
    type: actionTypes.SET_LOADING,
    payload: loadingState
  };
}

export function setAuthError(error: any): SetAuthError {
  return {
    type: actionTypes.SET_AUTH_ERROR,
    payload: error
  };
}

export function setSearchError(error: any): SetSearchError {
  return {
    type: actionTypes.SET_SEARCH_ERROR,
    payload: error
  };
}
