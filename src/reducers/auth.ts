import { AUTH_ERROR, AUTH_USER } from "../actions/types";
import { IAuthAction, IAuthState } from "../interfaces";

const initialState = {
  authenticated: localStorage.getItem("seostudio-token") || "",
  errorMessage: ""
};

export default function(state: IAuthState = initialState, action: IAuthAction) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenicated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return initialState;
  }
}
