import {
  UPDATE_TOKEN,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_ERROR,
} from "../actions/actionTypes";
import { initialState } from "../initialState";

export const updateTokenReducer = (state = initialState, action) => {
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
