import {
  WEBSOCKET_CLOSE,
  WEBSOCKET_CONNECT,
  WEBSOCKET_DISCONNECT,
  WEBSOCKET_MESSAGE,
  WEBSOCKET_OPEN,
  WEBSOCKET_SEND
} from "../actions/types";
import { ISocketMiddlewareAction } from "../interfaces";

let socket: WebSocket;

export default ({ dispatch }: any) => (next: any) => (
  action: ISocketMiddlewareAction
) => {
  // check to see if the action exists on the websocket protocol
  if (!action.payload || !action.socket) {
    next(action);
  }

  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      socket = new WebSocket(action.payload.url);

      socket.onopen = () => dispatch({ type: WEBSOCKET_OPEN });
      socket.onclose = () => {
        console.log("disconnect");
        dispatch({ type: WEBSOCKET_CLOSE });
      };
      socket.onmessage = () => dispatch({ type: WEBSOCKET_MESSAGE });
      break;
    }
    case WEBSOCKET_SEND: {
      socket.send(JSON.stringify(action.payload));
      break;
    }
    case WEBSOCKET_DISCONNECT: {
      socket.close();
      break;
    }
    default:
      break;
  }

  return next(action);
};
