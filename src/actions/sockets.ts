import {
  WEBSOCKET_CONNECT,
  WEBSOCKET_DISCONNECT,
  WEBSOCKET_SEND
} from "./types";
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

export const sendSocket = () => {
  return {
    payload: "Sending socket from the client",
    type: WEBSOCKET_SEND
  };
};
