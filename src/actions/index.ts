import axios from "axios";
import { Dispatch } from "redux";
import { ISignupUser } from "../interfaces";

export const signupUser = (formProps: ISignupUser) => (dispatch: Dispatch) => {
  axios.post("http://localhost:8080/api/v0/auth/signup", formProps);
};
