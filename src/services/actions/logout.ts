import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from "./actionTypes";
import { ILogout, ILogoutSuccess, ILogoutError, TLogout } from "./todo";

export const actionLogoutRequest = {
  logout: (): ILogout => ({ type: LOGOUT }),
  logoutSuccess: (): ILogoutSuccess => ({ type: LOGOUT_SUCCESS }),
  logoutError: (): ILogoutError => ({ type: LOGOUT_ERROR }),
};
