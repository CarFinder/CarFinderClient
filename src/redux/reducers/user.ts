import {
  USER_CONFIRM_EMAIL,
  USER_CONFIRM_EMAIL_SUCCESS,
  USER_LOGGED_OUT,
  USER_SIGN_IN,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_UP,
  USER_SIGN_UP_SUCCESS,
  USER_CHANGE_PASSWORD
} from '../actions/actionTypes';
import { UserAction } from '../actions/userActions';
import { InitialState, User } from '../models/userModel';

export default function userReducer(state: InitialState = {}, action: UserAction): InitialState {
  switch (action.type) {
    case USER_SIGN_IN_SUCCESS:
      return action.payload;
    case USER_LOGGED_OUT:
      return {};
    case USER_SIGN_IN:
      return state;
    case USER_SIGN_UP:
      return state;
    case USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        signedup: true
      };
    case USER_CONFIRM_EMAIL:
      return state;
    case USER_CONFIRM_EMAIL_SUCCESS:
      return state;
    case USER_CHANGE_PASSWORD:
      return state;
    default:
      return state;
  }
}
