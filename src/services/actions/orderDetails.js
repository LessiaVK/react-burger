import {
  ORDER_NUMBER,
  ORDER_NUMBER_SUCCESS,
  ORDER_NUMBER_ERROR,
} from "./actionTypes";

export const actionOrderDetails = {
  orderNumber: (data) => ({ type: ORDER_NUMBER, payload: data }),
  orderNumberSuccess: (data) => ({ type: ORDER_NUMBER_SUCCESS, payload: data }),
  orderNumberError: (data) => ({ type: ORDER_NUMBER_ERROR, payload: data }),
};

