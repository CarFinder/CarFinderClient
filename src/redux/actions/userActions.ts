import { UserData as ChangePasswordData } from '../../containers/ChangePassword';
import { UserData as SigninUserData } from '../../containers/Signin';
import { UserData } from '../../containers/Signup';
import setAuthorizationHeader from '../../utils/axiosHeader';
import { User } from '../models/userModel';
import * as actionTypes from './actionTypes';

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

export interface UserSubmitEmail {
  type: actionTypes.USER_SUBMIT_EMAIL;
  payload: ChangePasswordData;
}

export interface UserChangePassword {
  type: actionTypes.USER_CHANGE_PASSWORD;
  payload: ChangePasswordData;
  token: string;
}

export interface UserChangeLanguage {
  type: actionTypes.SET_LANGUAGE;
  payload: string;
}

export type UserAction =
  | UserLoggedIn
  | UserLoggedOut
  | UserSignIn
  | UserSignUp
  | UserSignedUp
  | UserConfirmEmail
  | UserConfirmedEmail
  | UserSubmitEmail
  | UserChangePassword
  | UserChangeLanguage;

export function userLoggedIn(user: User): UserLoggedIn {
  return {
    type: actionTypes.USER_SIGN_IN_SUCCESS,
    payload: user
  };
}

export function userLoggedOut(): UserLoggedOut {
  localStorage.removeItem('jwt');
  setAuthorizationHeader();
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

export function userSubmitEmail(userData: ChangePasswordData): UserSubmitEmail {
  return {
    type: actionTypes.USER_SUBMIT_EMAIL,
    payload: userData
  };
}

export function userChangePassword(
  userData: ChangePasswordData,
  token: string
): UserChangePassword {
  return {
    type: actionTypes.USER_CHANGE_PASSWORD,
    payload: userData,
    token: token
  };
}

export function userChangeLanguage(language: string): UserChangeLanguage {
  localStorage.setItem('interfaceLanguage', language);
  return {
    type: actionTypes.SET_LANGUAGE,
    payload: language
  };
}
