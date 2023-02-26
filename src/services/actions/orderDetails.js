import { FETCH_ORDER, ORDER_NUMBER } from "./actionTypes";

export const actionOrderDetails = {
  fetchOrder: (data) => ({ type: FETCH_ORDER, payload: data }),
  orderNumber: (data) => ({ type: ORDER_NUMBER, payload: data }),
};
