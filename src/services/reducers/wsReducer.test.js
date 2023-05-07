import { initialState } from "../initialState";
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from "../actions/actionTypes";
import wsReducer from "./wsReducer";

const initState = initialState.wsReducer;

const mockedData = {
  orders: [
    {
      createdAt: "2023-05-04T07:28:53.646Z",
      ingredients: [
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa093d",
      ],
      name: "Space антарианский флюоресцентный бургер",
      number: 3025,
      status: "done",
      updatedAt: "2023-05-04T07:28:53.704Z",
      _id: "64535eb545c6f2001be70b52",
    },
    {
      createdAt: "2023-05-04T04:31:54.858Z",
      ingredients: [
        "643d69a5c3f7b9001cfa0942",
        "643d69a5c3f7b9001cfa093f",
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa093c",
      ],
      name: "Бессмертный краторный spicy бургер",
      number: 3013,
      status: "done",
      updatedAt: "2023-05-04T04:31:54.975Z",
      _id: "6453353a45c6f2001be70a7c",
    },
  ],
  success: true,
  total: 2656,
  totalToday: 89,
};

const mockedDataErr = true;

describe("ws reducer", () => {
  it("should return the initial state", () => {
    expect(wsReducer(undefined, { type: undefined })).toEqual(initState);
  });

  it("should set connected", () => {
    expect(wsReducer(initState, { type: WS_CONNECTION_SUCCESS })).toEqual({
      ...initState,
      error: null,
      wsConnected: true,
    });
  });

  it("should get error", () => {
    expect(
      wsReducer(initState, {
        type: WS_CONNECTION_ERROR,
        payload: mockedDataErr,
      })
    ).toEqual({
      ...initState,
      error: mockedDataErr,
      wsConnected: false,
    });
  });

  it("should connecting closed", () => {
    expect(wsReducer(initState, { type: WS_CONNECTION_CLOSED })).toEqual({
      ...initState,
      error: null,
      wsConnected: false,
    });
  });

  it("should get message", () => {
    expect(
      wsReducer(initState, { type: WS_GET_MESSAGE, payload: mockedData })
    ).toEqual({
      ...initState,
      error: null,
      orders: mockedData,
      dataIsReady: true,
    });
  });
});
