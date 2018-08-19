import { Action, Dispatch } from "redux";

export interface ISignupUser {
  email: string;
  password: string;
}

export interface ISignupProps {
  signupUser: (formProps: ISignupUser) => (dispatch: Dispatch) => void;
}

export interface IAuthState {
  readonly authenticated: string;
  readonly errorMessage: string;
}

export interface IAuthAction extends Action {
  type: string;
  payload: any;
}
