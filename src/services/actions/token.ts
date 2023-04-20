import {
  UPDATE_TOKEN,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_ERROR,
} from "./actionTypes";
import { IUpdateToken, IUpdateTokenError, IUpdateTokenSuccess, TToken } from "./todo";

export const actionUpdateToken = {
  updateToken: (data: TToken): IUpdateToken => ({ type: UPDATE_TOKEN, payload: data }),
  updateTokenSuccess: (data: boolean): IUpdateTokenSuccess => ({ type: UPDATE_TOKEN_SUCCESS, payload: data }),
  updateTokenError: (data: boolean): IUpdateTokenError => ({ type: UPDATE_TOKEN_ERROR, payload: data }),
};