import {
  ORDER_NUMBER,
  ORDER_NUMBER_SUCCESS,
  ORDER_NUMBER_ERROR,
} from "../actions/actionTypes";
import { initialState } from "../initialState";

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_NUMBER:
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };

    case ORDER_NUMBER_SUCCESS:
      return {
        ...state,
        orderNum: action.payload,
        orderRequest: false,
        orderFailed: false,
      };

    case ORDER_NUMBER_ERROR:
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };

    default:
      return state;
  }
};
