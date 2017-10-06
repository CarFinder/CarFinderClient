import * as actionTypes from './actionTypes';
import { UserData } from '../../containers/Signup';

export interface UserLoggedIn {
  type: actionTypes.USER_LOGGED_IN;
  payload: any;
}

export interface UserLoggedOut {
  type: actionTypes.USER_LOGGED_OUT;
}

export interface UserSignUp {
  type: actionTypes.USER_SIGN_UP;
  payload: UserData;
}

export type UserAction = UserLoggedIn | UserLoggedOut | UserSignUp;

export function userLoggedIn(user: any): UserLoggedIn {
  return {
    type: actionTypes.USER_LOGGED_IN,
    payload: user
  };
}

export function userLoggedOut(): UserLoggedOut {
  return {
    type: actionTypes.USER_LOGGED_OUT
  };
}

export function userSignup(user: UserData): UserSignUp {
  return {
    type: actionTypes.USER_SIGN_UP,
    payload: user
  };
}
