import {
  ORDER_NUMBER,
  ORDER_NUMBER_SUCCESS,
  ORDER_NUMBER_ERROR,
} from "../actions/actionTypes";
import { initialState } from "../initialState";
import { TTodoActions } from "../actions/todo";
import { TOrderReducer } from "./todo";

export const orderReducer = (state = initialState.orderReducer, action: TTodoActions): TOrderReducer => {
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
