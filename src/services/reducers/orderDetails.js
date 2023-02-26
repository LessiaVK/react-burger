import { FETCH_ORDER, ORDER_NUMBER } from "../actions/actionTypes";
import { initialState } from "../../initialState";

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDER:
      return {
        ...state,
        currentOrder: action.payload,
      };

    case ORDER_NUMBER:
      return {
        ...state,
        orderNumber: action.payload,
      };

    default:
      return state;
  }
};
