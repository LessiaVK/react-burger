import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../actions/actionTypes";
import { initialState } from "../initialState";
import { TTodoActions } from "../actions/todo";
import { TLoginReducer } from "./todo";

export const loginReducer = (state = initialState.loginReducer, action: TTodoActions): TLoginReducer => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginSuccess: false,
        loginError: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
        loginError: false,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginSuccess: false,
        loginError: true,
      };

    default:
      return state;
  }
};
