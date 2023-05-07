import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from "../actions/actionTypes";
import { initialState } from "../initialState";
import { logoutReducer } from "./logout";

const initState = initialState.logoutReducer;

describe("logoutReducer", () => {
  it("should return the initial state", () => {
    expect(logoutReducer(undefined, { type: undefined })).toEqual(initState);
  });

  it("should set logout", () => {
    expect(logoutReducer(initState, { type: LOGOUT })).toEqual({
      ...initState,
      logoutSuccess: false,
      logoutError: false,
    });
  });
  it("should set logout success", () => {
    expect(logoutReducer(initState, { type: LOGOUT_SUCCESS })).toEqual({
      ...initState,
      logoutSuccess: true,
      logoutError: false,
    });
  });
  it("should set logout error", () => {
    expect(logoutReducer(initState, { type: LOGOUT_ERROR })).toEqual({
      ...initState,
      logoutSuccess: false,
      logoutError: true,
    });
  });
});
