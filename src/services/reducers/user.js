import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR,
} from "../actions/actionTypes";
import { initialState } from "../initialState";


export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        userSuccess: false,
        userError: false,
      };

    case USER_SUCCESS:
      return {
        ...state,
        userRequest: action.payload.user,
        userSuccess: true,
        userError: false,
    };

    case USER_ERROR:
      return {
        ...state,
        userSuccess: false,
        userError: true,
      };

    default:
      return state;
  }
};
