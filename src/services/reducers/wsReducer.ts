import { initialState } from "../initialState";
import { TTodoActions } from "../actions/todo";
import { TWsReducer } from "./todo";

export const wsReducer = (state = initialState.wsReducer, action: TTodoActions): TWsReducer => {
  // console.log("wsReducer",action.type,action.payload);
  switch (action.type) {
    case "WS_CONNECTION_SUCCESS":
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };

    case "WS_CONNECTION_ERROR":
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case "WS_CONNECTION_CLOSED":
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case "WS_GET_MESSAGE":

      return {
        ...state,
        error: undefined,
        orders: action.payload,
        dataIsReady: true,
      };

    default:
      return state;
  }
};

export default wsReducer;
