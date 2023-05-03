import {
  WS_SEND_MESSAGE,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_SEND_PONG,
  WS_CONNECTION_END,
} from "./actionTypes";

export function wsConnectionSuccess() {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
}

export function wsConnectionStart(url: string) {
  return {
    type: WS_CONNECTION_START,
    payload: url,
  };
}


export const wsSendMessage = (message: any) => {
  return {
    type: WS_SEND_MESSAGE,
    payload: message,
  };
};

export const wsConnectionError = (data: boolean | null) => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsGetMessage = (data: any) => {
  return {
    type: WS_GET_MESSAGE,
    payload: data,
  };
};