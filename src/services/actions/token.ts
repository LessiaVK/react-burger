import {
  UPDATE_TOKEN,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_ERROR,
} from "./actionTypes";
import { IUpdateToken, IUpdateTokenError, IUpdateTokenSuccess, TToken } from "./todo";

export const actionUpdateToken = {
  updateToken: (): IUpdateToken => ({ type: UPDATE_TOKEN }),
  updateTokenSuccess: (data: TToken): IUpdateTokenSuccess => ({ type: UPDATE_TOKEN_SUCCESS, payload: data }),
  updateTokenError: (): IUpdateTokenError => ({ type: UPDATE_TOKEN_ERROR }),
};
