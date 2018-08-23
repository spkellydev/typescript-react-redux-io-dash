export interface ISocketMiddlewareAction {
  payload: any;
  socket: WebSocket;
  type: string;
}
