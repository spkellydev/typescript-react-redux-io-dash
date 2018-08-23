import { WEBSOCKET_MESSAGE } from "../actions/types";
import { ISocketMiddlewareAction } from "../interfaces";

export default function(state = {}, action: ISocketMiddlewareAction) {
  switch (action.type) {
    case WEBSOCKET_MESSAGE: {
      const data = JSON.parse(action.payload.data);
      return { ...state, ...data };
    }
    default:
      return state;
  }
}
