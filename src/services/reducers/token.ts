import {
  UPDATE_TOKEN,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_ERROR,
} from "../actions/actionTypes";
import { initialState } from "../initialState";
import { TTodoActions } from "../actions/todo";
import { TUpdateTokenReducer } from "./todo";

export const updateTokenReducer = (state = initialState.updateTokenReducer, action: TTodoActions): TUpdateTokenReducer => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        updateTokenSuccess: false,
        updateTokenError: false,
      };

    case UPDATE_TOKEN_SUCCESS:
      return {
        ...state,
        updateToken: action.payload,
        updateTokenSuccess: true,
        updateTokenError: false,
      };

    case UPDATE_TOKEN_ERROR:
      return {
        ...state,
        updateTokenSuccess: false,
        updateTokenError: true,
      };

    default:
      return state;
  }
};
