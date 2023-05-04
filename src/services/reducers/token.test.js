import {
  UPDATE_TOKEN,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_ERROR,
} from "../actions/actionTypes";
import { initialState } from "../initialState";
import { updateTokenReducer } from "./token";

const initState = initialState.updateTokenReducer;

const mockedData = {
  success: true,
  accessToken: "Bearer WJBCXSAUQFKJH12E79DASJL82HK",
  refreshToken: "QSGHQJDGIK1245126JdbjJ",
};

describe("updateTokenReducer", () => {
  it("should return the initial state", () => {
    expect(updateTokenReducer(undefined, { type: undefined })).toEqual(
      initState
    );
  });

  it("should update token request", () => {
    expect(updateTokenReducer(initState, { type: UPDATE_TOKEN })).toEqual({
      ...initState,
      updateTokenSuccess: false,
      updateTokenError: false,
    });
  });
  it("should update token", () => {
    expect(
      updateTokenReducer(initState, {
        type: UPDATE_TOKEN_SUCCESS,
        payload: mockedData,
      })
    ).toEqual({
      ...initState,
      updateToken: mockedData,
      updateTokenSuccess: true,
      updateTokenError: false,
    });
  });
  it("should update token error", () => {
    expect(updateTokenReducer(initState, { type: UPDATE_TOKEN_ERROR })).toEqual(
      {
        ...initState,
        updateTokenSuccess: false,
        updateTokenError: true,
      }
    );
  });
});
