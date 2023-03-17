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
        console.log("REGISTER_SUCCESS",action.payload);
      
      return {
        ...state,
        registerSuccess: true,
        registerError: false,
        // token: action.payload.accessToken,
        // refreshToken: action.payload.refreshToken,
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
