import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./actionTypes";

export const actionRegisterRequest = {
  registerRequest: (data) => ({ type: REGISTER_REQUEST, payload: data }),
  registerSuccess: (data) => ({ type: REGISTER_SUCCESS, payload: data }),
  registerError: (data) => ({ type: REGISTER_ERROR, payload: data }),
};
