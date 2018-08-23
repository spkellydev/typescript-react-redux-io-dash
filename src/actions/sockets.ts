import { WEBSOCKET_CONNECT, WEBSOCKET_DISCONNECT } from "./types";
export const connectSocket = (url = "ws://localhost:8080") => {
  return {
    payload: {
      url
    },
    type: WEBSOCKET_CONNECT
  };
};

export const closeSocket = () => {
  return {
    payload: {},
    type: WEBSOCKET_DISCONNECT
  };
};
