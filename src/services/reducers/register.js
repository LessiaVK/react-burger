import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../actions/actionTypes";
import { initialState } from "../initialState";

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        registerSuccess: false,
        registerError: false,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
        registerError: false,
        user: action.payload.user,
      };

    case REGISTER_ERROR:
      return {
        ...state,
        registerSuccess: false,
        registerError: true,
      };

    default:
      return state;
  }
};
