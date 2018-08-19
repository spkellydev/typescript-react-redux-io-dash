import { IAuthAction, IAuthState } from "../interfaces";

const initialState = {
  authenticated: "",
  errorMessage: ""
};

export default function(state: IAuthState = initialState, action: IAuthAction) {
  switch (action.type) {
    default:
      return initialState;
  }
}
