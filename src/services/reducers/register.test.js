import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../actions/actionTypes";
import { initialState } from "../initialState";
import { registerReducer } from "./register";

const initState = initialState.registerReducer;

const mockedData = {
  success: true,
  user: {
    email: "info@av.ru",
    name: "Estrella",
  },
  accessToken: "Bearer QTDFY2847982SHJDBSKKKMC",
  refreshToken: "28ye9qwhduwhd9HSJAHBDI",
};

describe("registerReducer", () => {
  it("should return the initial state", () => {
    expect(registerReducer(undefined, { type: undefined })).toEqual(initState);
  });

  it("should register request", () => {
    expect(registerReducer(initState, { type: REGISTER_REQUEST })).toEqual({
      ...initState,
      registerSuccess: false,
      registerError: false,
    });
  });
  it("should register set user", () => {
    expect(
      registerReducer(initState, {
        type: REGISTER_SUCCESS,
        payload: mockedData,
      })
    ).toEqual({
      ...initState,
      registerSuccess: true,
      registerError: false,
      user: mockedData.user,
    });
  });
  it("should register error", () => {
    expect(registerReducer(initState, { type: REGISTER_ERROR })).toEqual({
      ...initState,
      registerSuccess: false,
      registerError: true,
    });
  });
});
