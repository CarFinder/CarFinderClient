import { UserAction } from '../actions/userActions';
import { InitialState, User } from '../models/userModel';
import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_SIGN_IN } from '../actions/actionTypes';

export default function userReducer(state: InitialState, action: UserAction): InitialState {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    case USER_LOGGED_OUT:
      localStorage.removeItem("jwt");
      return {};
    case USER_SIGN_IN:
      return state;
    default:
      return {};
  }
}
