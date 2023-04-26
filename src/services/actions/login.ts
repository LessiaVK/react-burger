import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "./actionTypes";
import { ILoginRequest, ILoginSuccess, ILoginError, TUser } from "./todo";

export const actionLoginRequest = {
  loginRequest: (data: TUser): ILoginRequest => ({ type: LOGIN_REQUEST, payload: data }),
  loginSuccess: (data: boolean): ILoginSuccess => ({ type: LOGIN_SUCCESS, payload: data }),
  loginError: (data: boolean): ILoginError => ({ type: LOGIN_ERROR, payload: data }),
};
