import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
  } from "./actionTypes";
  
  export const actionLoginRequest = {
    loginRequest: (data) => ({ type: LOGIN_REQUEST, payload: data }),
    loginSuccess: (data) => ({ type: LOGIN_SUCCESS, payload: data }),
    loginError: (data) => ({ type: LOGIN_ERROR, payload: data }),
  };
