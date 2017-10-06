// import { FormStateAction } from '../actions/formStateActions';
import { InitialState, FormState } from '../models/formStateModel';
import { SET_LOADING, SET_AUTH_ERROR, SET_SEARCH_ERROR } from '../actions/actionTypes';

// FIXME: fix type of action;
export default function userReducer(state: InitialState, action: any): InitialState {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        authError: action.payload
      };
    case SET_SEARCH_ERROR:
      return {
        ...state,
        searchError: action.payload
      };
    default:
      return state;
  }
}
