import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from "./actionTypes";

export const actionLogoutRequest = {
  logout: (data) => ({ type: LOGOUT, payload: data }),
  logoutSuccess: (data) => ({ type: LOGOUT_SUCCESS, payload: data }),
  logoutError: (data) => ({ type: LOGOUT_ERROR, payload: data }),
};
