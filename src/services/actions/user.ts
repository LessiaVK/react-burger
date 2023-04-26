import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from "./actionTypes";
import { IUserRequest, IUserSuccess, IUserError, TUser } from "./todo";

export const actionUserRequest = {
  userRequest: (data: boolean): IUserRequest => ({ type: USER_REQUEST, payload: data }),
  userSuccess: (data: TUser): IUserSuccess => ({ type: USER_SUCCESS, payload: data }),
  userError: (data: boolean): IUserError => ({ type: USER_ERROR, payload: data }),
};
