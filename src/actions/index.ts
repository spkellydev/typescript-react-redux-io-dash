import axios from "axios";
import { Dispatch } from "redux";
import { ISignupUser } from "../interfaces";
import { AUTH_ERROR, AUTH_USER } from "./types";

export const signupUser = (
  formProps: ISignupUser,
  callback: () => void
) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/v0/auth/signup",
      formProps
    );

    dispatch({ payload: res.data.token, type: AUTH_USER });
    callback();
  } catch (e) {
    dispatch({ payload: "Email in use", type: AUTH_ERROR });
  }
};
