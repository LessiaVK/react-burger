import {
  ORDER_NUMBER,
  ORDER_NUMBER_SUCCESS,
  ORDER_NUMBER_ERROR,
  IS_MODAL,
  NO_MODAL,
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

    case IS_MODAL:
      return {
        ...state,
        isModal: true,
      };

    case NO_MODAL:
      return {
        ...state,
        isModal: false,
      };

    default:
      return state;
  }
};
