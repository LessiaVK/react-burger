import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./actionTypes";
import { IRegisterError, IRegisterRequest, IRegisterSuccess, TUser } from "./todo";

export const actionRegisterRequest = {
  registerRequest: (): IRegisterRequest => ({ type: REGISTER_REQUEST }),
  registerSuccess: (data: TUser): IRegisterSuccess => ({ type: REGISTER_SUCCESS, payload: data }),
  registerError: (): IRegisterError => ({ type: REGISTER_ERROR }),
};
