import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_ERROR,
  } from "./actionTypes";
  
  export const actionUserRequest = {
    userRequest: (data) => ({ type: USER_REQUEST, payload: data }),
    userSuccess: (data) => ({ type: USER_SUCCESS, payload: data }),
    userError: (data) => ({ type: USER_ERROR, payload: data }),
  };
