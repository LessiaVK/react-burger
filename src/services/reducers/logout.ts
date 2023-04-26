import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from "../actions/actionTypes";
import { initialState } from "../initialState";
import { TTodoActions } from "../actions/todo";
import { TInitialState } from "./todo";


export const logoutReducer = (state = initialState, action: TTodoActions) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        logoutSuccess: false,
        logoutError: false,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutSuccess: true,
        logoutError: false,
      };

    case LOGOUT_ERROR:
      return {
        ...state,
        logoutSuccess: false,
        logoutError: true,
      };

    default:
      return state;
  }
};
