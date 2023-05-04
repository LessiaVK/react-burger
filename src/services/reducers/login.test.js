import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../actions/actionTypes";
import { initialState } from "../initialState";
import { loginReducer } from "./login";

const initState = initialState.loginReducer;

describe("loginReducer", () => {
  it("should return the initial state", () => {
    expect(loginReducer(undefined, { type: undefined })).toEqual(initState);
  });

  it("should login request", () => {
    expect(loginReducer(initState, { type: LOGIN_REQUEST })).toEqual({
      ...initState,
      loginSuccess: false,
      loginError: false,
    });
  });
  it("should login success", () => {
    expect(loginReducer(initState, { type: LOGIN_SUCCESS })).toEqual({
      ...initState,
      loginSuccess: true,
      loginError: false,
    });
  });
  it("should login error", () => {
    expect(loginReducer(initState, { type: LOGIN_ERROR })).toEqual({
      ...initState,
      loginSuccess: false,
      loginError: true,
    });
  });
});
