import * as actionTypes from './actionTypes';
import { UserData } from '../../containers/Signup';
import { User } from '../models/userModel';
import { UserData as SigninUserData } from '../../containers/Signin';

export interface UserLoggedIn {
  type: actionTypes.USER_SIGN_IN_SUCCESS;
  payload: User;
}

export interface UserLoggedOut {
  type: actionTypes.USER_LOGGED_OUT;
}

export interface UserSignIn {
  type: actionTypes.USER_SIGN_IN;
  payload: SigninUserData;
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
  | UserSignIn
  | UserSignUp
  | UserSignedUp
  | UserConfirmEmail
  | UserConfirmedEmail;

export function userLoggedIn(user: User): UserLoggedIn {
  return {
    type: actionTypes.USER_SIGN_IN_SUCCESS,
    payload: user
  };
}

export function userLoggedOut(): UserLoggedOut {
  localStorage.removeItem('jwt');
  return {
    type: actionTypes.USER_LOGGED_OUT
  };
}

export function userSignIn(userData: SigninUserData): UserSignIn {
  return {
    type: actionTypes.USER_SIGN_IN,
    payload: userData
  };
}

export function userSignup(user: UserData): UserSignUp {
  return {
    type: actionTypes.USER_SIGN_UP,
    payload: user
  };
}

export function userSignedUp(): UserSignedUp {
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
