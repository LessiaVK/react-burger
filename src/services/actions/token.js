import {
    UPDATE_TOKEN,
    UPDATE_TOKEN_SUCCESS,
    UPDATE_TOKEN_ERROR,
  } from "./actionTypes";
  
  export const actionUpdateToken = {
    userRequest: (data) => ({ type: UPDATE_TOKEN, payload: data }),
    userSuccess: (data) => ({ type: UPDATE_TOKEN_SUCCESS, payload: data }),
    userError: (data) => ({ type: UPDATE_TOKEN_ERROR, payload: data }),
  };
