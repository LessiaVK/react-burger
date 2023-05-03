import { Middleware } from "redux";
import { getCookie } from "../utils/cookie";
import { wsActions } from "./store";
import { rootReducer } from "./reducers";

type TRoots = ReturnType<typeof rootReducer>

export type WsActions = typeof wsActions;

export const socketMiddleware = (wsUrl: string, wsActions: WsActions): Middleware<{}, TRoots> => {
  return (store) => {
    let socket: WebSocket | null = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsStart,
        wsSendMessage,
        onOpen,
        onClose,
        onError,
        onGetMessage,
        wsClose,
        wsPingPong,
      } = wsActions;
      if (socket == null || socket.url !== action.payload) {
        if (type === wsStart) {
          socket = new WebSocket(action.payload);

          socket.onopen = (event) => {
            if (socket) {
              console.log("socket.readyState 1", socket);

              if (socket.readyState !== 1) {
                console.log("real open", socket.readyState);
                dispatch({ type: onOpen, payload: event });
              }
            }
          };

          socket.onerror = (event) => {
            dispatch({ type: onError, payload: event });
          };

          socket.onmessage = (event) => {
            const { data } = event;

            const parseData = JSON.parse(data);
            dispatch({
              type: onGetMessage,
              payload: parseData
            });
          };

          socket.onclose = (event) => {
            dispatch({ type: onClose, payload: event });
          };
        }
      }
      if (wsClose && type === wsClose && socket) {
        console.log("socket.wsClose", socket);

        if (socket.readyState === 1) {
          socket.close();
          socket = null;
        }
      }

      if (wsSendMessage && type === wsSendMessage && socket) {
        const message = {
          ...payload,
          token: getCookie("accessToken"),
        };
        socket.send(JSON.stringify(message));
      }

      if (wsPingPong && type === wsPingPong && socket) {
        socket.send("pong");
      }

      next(action);
    };
  };
};