import {
  ORDER_NUMBER,
  ORDER_NUMBER_SUCCESS,
  ORDER_NUMBER_ERROR,
} from "./actionTypes";
import { IOrderNumber, IOrderError, IOrderSuccess } from "./todo";

export const actionOrderDetails = {
  orderNumber: (data: boolean): IOrderNumber => ({ type: ORDER_NUMBER, payload: data }),
  orderNumberSuccess: (data: number | undefined): IOrderSuccess => ({ type: ORDER_NUMBER_SUCCESS, payload: data }),
  orderNumberError: (data: boolean): IOrderError => ({ type: ORDER_NUMBER_ERROR, payload: data }),
};