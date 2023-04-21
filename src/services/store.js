import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { rootReducer } from "./reducers";

import thunk from "redux-thunk";
import { socketMiddleware } from "./socketMiddleware";
// import { TApplicationActions } from "./actions/types";


import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_SEND_MESSAGE,
  WS_SEND_PONG,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_END,
  WS_GET_MESSAGE,
} from "./actions/actionTypes";


export const wsUrl = "wss://norma.nomoreparties.space/orders/all";

export const wsActions = {
  wsStart: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  wsClose: WS_CONNECTION_END,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onGetMessage: WS_GET_MESSAGE,
  wsPingPong: WS_SEND_PONG,
};


export const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk,socketMiddleware(wsUrl, wsActions)))
  );
  return store;
};
