import {
  UPDATE_TOKEN,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_ERROR,
} from "./actionTypes";

export const actionUpdateToken = {
  updateToken: (data) => ({ type: UPDATE_TOKEN, payload: data }),
  updateTokenSuccess: (data) => ({ type: UPDATE_TOKEN_SUCCESS, payload: data }),
  updateTokenError: (data) => ({ type: UPDATE_TOKEN_ERROR, payload: data }),
};
