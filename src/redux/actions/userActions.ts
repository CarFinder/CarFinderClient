import * as actionTypes from './actionTypes';

export interface UserLoggedIn {
  type: actionTypes.USER_LOGGED_IN;
  payload: object;
}

export interface UserLoggedOut {
  type: actionTypes.USER_LOGGED_OUT;
}

export interface UserSignIn {
  type: actionTypes.USER_SIGN_IN;
  payload: object;
}

export type UserAction = UserLoggedIn | UserLoggedOut | UserSignIn;

export function userLoggedIn(user: object): UserLoggedIn {
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

export function userSignIn(userData: object): UserSignIn {
  return {
    type: actionTypes.USER_SIGN_IN,
    payload: userData
  };
}
