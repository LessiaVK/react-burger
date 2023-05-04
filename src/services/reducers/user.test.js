import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from "../actions/actionTypes";
import { initialState } from "../initialState";
import { userReducer } from "./user";

const initState = initialState.userReducer;

const mockedData = {
  success: true,
  user: {
    email: "info@av.ru",
    name: "Estrella",
  },
};

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, { type: undefined })).toEqual(initState);
  });

  it("should set false", () => {
    expect(userReducer(initState, { type: USER_REQUEST })).toEqual({
      ...initState,
      userSuccess: false,
      userError: false,
      userIsCheck: false,
    });
  });
  it("should set data", () => {
    expect(
      userReducer(initState, { type: USER_SUCCESS, payload: mockedData })
    ).toEqual({
      ...initState,
      userRequest: mockedData.user,
      userIsCheck: true,
      userSuccess: true,
      userError: false,
    });
  });
  it("should set error", () => {
    expect(userReducer(initState, { type: USER_ERROR })).toEqual({
      ...initState,
      userSuccess: false,
      userError: true,
      userIsCheck: true,
    });
  });
});
