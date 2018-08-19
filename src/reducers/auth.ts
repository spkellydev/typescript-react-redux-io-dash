import { Action } from "redux";

interface IAuthState {
  readonly authenticated: string;
  readonly errorMessage: string;
}

const initialState = {
  authenticated: "",
  errorMessage: ""
};

interface IAuthAction extends Action {
  type: string;
  payload: any;
}

export default function(state: IAuthState = initialState, action: IAuthAction) {
  switch (action.type) {
    default:
      return initialState;
  }
}
