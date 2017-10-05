import * as actionTypes from './actionTypes';

export interface UserLoggedIn {
  type: actionTypes.USER_LOGGED_IN;
  payload: object;
}

export interface UserLoggedOut {
  type: actionTypes.USER_LOGGED_OUT;
}

export interface GetUserData {
  type: actionTypes.GET_USERDATA;
  payload: object;
}

export type UserAction = UserLoggedIn | UserLoggedOut | GetUserData;

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

export function getUserData(userData: object): GetUserData {
  return {
    type: actionTypes.GET_USERDATA,
    payload: userData
  };
}
