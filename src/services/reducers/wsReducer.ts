import { initialState } from "../initialState";
import { 
  WS_CONNECTION_SUCCESS, 
  WS_CONNECTION_ERROR, 
  WS_CONNECTION_CLOSED, 
  WS_GET_MESSAGE,
} from "../actions/actionTypes";
import { TTodoActions } from "../actions/todo";
import { TWsReducer } from "./todo";

export const wsReducer = (state = initialState.wsReducer, action: TTodoActions): TWsReducer => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: null,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: null,
        wsConnected: false,
      };

    case WS_GET_MESSAGE:

      return {
        ...state,
        error: null,
        orders: action.payload,
        dataIsReady: true,
      };

    default:
      return state;
  }
};

export default wsReducer;
