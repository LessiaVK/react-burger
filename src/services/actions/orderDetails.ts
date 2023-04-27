import {
  ORDER_NUMBER,
  ORDER_NUMBER_SUCCESS,
  ORDER_NUMBER_ERROR,
} from "./actionTypes";
import { IOrderNumber, IOrderError, IOrderSuccess } from "./todo";

export const actionOrderDetails = {
  orderNumber: (): IOrderNumber => ({ type: ORDER_NUMBER }),
  orderNumberSuccess: (data: number | undefined): IOrderSuccess => ({ type: ORDER_NUMBER_SUCCESS, payload: data }),
  orderNumberError: (): IOrderError => ({ type: ORDER_NUMBER_ERROR }),
};