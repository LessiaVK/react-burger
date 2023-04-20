import {
  ORDER_NUMBER,
  ORDER_NUMBER_SUCCESS,
  ORDER_NUMBER_ERROR,
} from "./actionTypes";
import { IOrderNumber, IOrderError, IOrderSuccess } from "./todo";

export const actionOrderDetails = {
  orderNumber: (data: number | undefined): IOrderNumber => ({ type: ORDER_NUMBER, payload: data }),
  orderNumberSuccess: (data:boolean): IOrderSuccess => ({ type: ORDER_NUMBER_SUCCESS, payload: data }),
  orderNumberError: (data: boolean): IOrderError => ({ type: ORDER_NUMBER_ERROR, payload: data }),
};
// export const actionOrderDetails = {
//   orderNumber: (data: number | undefined): IOrderNumber => ({ type: ORDER_NUMBER, payload: data }),
//   orderNumberSuccess: (data: boolean): IOrderSuccess => ({ type: ORDER_NUMBER_SUCCESS, payload: data }),
//   orderNumberError: (data: boolean): IOrderError => ({ type: ORDER_NUMBER_ERROR, payload: data }),
// };

