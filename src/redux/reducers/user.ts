import { UserAction } from '../actions/userActions';
import { InitialState, User } from '../models/userModel';
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_SIGN_UP,
  USER_SIGN_UP_SUCCESS,
  USER_CONFIRM_EMAIL,
  USER_CONFIRM_EMAIL_SUCCESS
} from '../actions/actionTypes';

export default function userReducer(state: InitialState = {}, action: UserAction): InitialState {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    case USER_LOGGED_OUT:
      return {};
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
      return {
        ...state,
        confirmed: true
      };
    default:
      return state;
  }
}
