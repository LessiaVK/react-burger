import {
  ORDER_NUMBER,
  ORDER_NUMBER_SUCCESS,
  ORDER_NUMBER_ERROR,
  IS_MODAL,
  NO_MODAL,
} from "../actions/actionTypes";
import { initialState } from "../initialState";
import { orderReducer } from "./orderDetails";

const initState = initialState.orderReducer;

const mockedData = 3070;

describe("orderReducer", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, { type: undefined })).toEqual(initState);
  });

  it("should get order", () => {
    expect(orderReducer(initState, { type: ORDER_NUMBER })).toEqual({
      ...initState,
      orderRequest: true,
      orderFailed: false,
    });
  });
  it("should set data order", () => {
    expect(
      orderReducer(initState, {
        type: ORDER_NUMBER_SUCCESS,
        payload: mockedData,
      })
    ).toEqual({
      ...initState,
      orderNum: mockedData,
      orderRequest: false,
      orderFailed: false,
    });
  });
  it("should set error", () => {
    expect(orderReducer(initState, { type: ORDER_NUMBER_ERROR })).toEqual({
      ...initState,
      orderRequest: false,
      orderFailed: true,
    });
  });
  it("should is modal", () => {
    expect(orderReducer(initState, { type: IS_MODAL })).toEqual({
      ...initState,
      isModal: true,
    });
  });
  it("should no modal", () => {
    expect(orderReducer(initState, { type: NO_MODAL })).toEqual({
      ...initState,
      isModal: false,
    });
  });
});
