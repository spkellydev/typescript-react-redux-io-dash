import { RouteComponentProps } from "react-router-dom";
import { Action, Dispatch } from "redux";

export interface IAuthAction extends Action {
  type: string;
  payload: string;
}

export interface IAuthState {
  readonly authenticated: string;
  readonly errorMessage: string;
}

export interface ISignupProps extends RouteComponentProps<any> {
  auth: string;
  signupUser: (
    formProps: ISignupUser,
    callback: () => void
  ) => (dispatch: Dispatch) => void;
  errorMessage: string;
}

export interface ISignupUser {
  email: string;
  password: string;
}
