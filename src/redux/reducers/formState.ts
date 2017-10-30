import {
  SET_AUTH_ERROR,
  SET_CHANGE_USER_DATA_ERROR,
  SET_LOADING,
  SET_SEARCH_ERROR,
  SET_SUCCESS_MESSAGE
} from '../actions/actionTypes';
import { InitialState } from '../models/formStateModel';

const initialState: InitialState = {
  loading: false,
  authError: '',
  searchError: '',
  changeUserDataError: '',
  successMessage: ''
};

// FIXME: fix type of action;
export default function formStateReducer(
  state: InitialState = initialState,
  action: any
): InitialState {
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
    case SET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload
      };
    case SET_CHANGE_USER_DATA_ERROR:
      return {
        ...state,
        changeUserDataError: action.payload
      };
    default:
      return state;
  }
}
