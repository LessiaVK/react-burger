import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from "../actions/actionTypes";
import { initialState } from "../initialState";


export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        logoutSuccess: false,
        logoutError: false,
      };

    case LOGOUT_SUCCESS:
        console.log("LOGOUT_SUCCESS",action.payload);
      
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
