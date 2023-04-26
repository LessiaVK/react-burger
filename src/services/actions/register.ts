import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./actionTypes";
import { IRegisterError, IRegisterRequest, IRegisterSuccess, TUser } from "./todo";

export const actionRegisterRequest = {
  registerRequest: (data: boolean): IRegisterRequest => ({ type: REGISTER_REQUEST, payload: data }),
  registerSuccess: (data: TUser): IRegisterSuccess => ({ type: REGISTER_SUCCESS, payload: data }),
  registerError: (data: boolean): IRegisterError => ({ type: REGISTER_ERROR, payload: data }),
};
