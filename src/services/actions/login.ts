import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "./actionTypes";
import { ILoginRequest, ILoginSuccess, ILoginError } from "./todo";

export const actionLoginRequest = {
  loginRequest: (): ILoginRequest => ({ type: LOGIN_REQUEST }),
  loginSuccess: (): ILoginSuccess => ({ type: LOGIN_SUCCESS }),
  loginError: (): ILoginError => ({ type: LOGIN_ERROR }),
};
