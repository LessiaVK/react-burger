import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from "./actionTypes";
import { ILogout, ILogoutSuccess, ILogoutError, TLogout } from "./todo";

export const actionLogoutRequest = {
  logout: (data: TLogout): ILogout => ({ type: LOGOUT, payload: data }),
  logoutSuccess: (data: boolean): ILogoutSuccess => ({ type: LOGOUT_SUCCESS, payload: data }),
  logoutError: (data: boolean): ILogoutError => ({ type: LOGOUT_ERROR, payload: data }),
};
