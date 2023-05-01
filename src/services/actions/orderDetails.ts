import {
  ORDER_NUMBER,
  ORDER_NUMBER_SUCCESS,
  ORDER_NUMBER_ERROR,
  IS_MODAL,
  NO_MODAL,
} from "./actionTypes";
import { IOrderNumber, IOrderError, IOrderSuccess, IIsModal, INoModal } from "./todo";

export const actionOrderDetails = {
  orderNumber: (): IOrderNumber => ({ type: ORDER_NUMBER }),
  orderNumberSuccess: (data: number | undefined): IOrderSuccess => ({ type: ORDER_NUMBER_SUCCESS, payload: data }),
  orderNumberError: (): IOrderError => ({ type: ORDER_NUMBER_ERROR }),
  isModal: (): IIsModal => ({ type: IS_MODAL }),
  noModal: (): INoModal => ({ type: NO_MODAL }),
};