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

export interface UserSignedUp {
  type: actionTypes.USER_SIGN_UP_SUCCESS;
}

export interface UserConfirmEmail {
  type: actionTypes.USER_CONFIRM_EMAIL;
  payload: string;
}

export interface UserConfirmedEmail {
  type: actionTypes.USER_CONFIRM_EMAIL_SUCCESS;
}

export type UserAction =
  | UserLoggedIn
  | UserLoggedOut
  | UserSignUp
  | UserSignedUp
  | UserConfirmEmail
  | UserConfirmedEmail;

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

export function userSignedUp() {
  return {
    type: actionTypes.USER_SIGN_UP_SUCCESS
  };
}

export function userConfirmEmail(token: string): UserConfirmEmail {
  return {
    type: actionTypes.USER_CONFIRM_EMAIL,
    payload: token
  };
}

export function userConfirmedEmail(): UserConfirmedEmail {
  return {
    type: actionTypes.USER_CONFIRM_EMAIL_SUCCESS
  };
}
