import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from "./actionTypes";
import { IUserRequest, IUserSuccess, IUserError, TUser } from "./todo";

export const actionUserRequest = {
  userRequest: (): IUserRequest => ({ type: USER_REQUEST }),
  userSuccess: (data: TUser): IUserSuccess => ({ type: USER_SUCCESS, payload: data }),
  userError: (): IUserError => ({ type: USER_ERROR }),
};
