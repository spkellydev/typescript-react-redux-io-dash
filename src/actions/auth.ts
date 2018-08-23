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
    localStorage.setItem("seostudio-token", res.data.token);
    dispatch({ payload: res.data.token, type: AUTH_USER });
    callback();
  } catch (e) {
    dispatch({ payload: "Email in use", type: AUTH_ERROR });
  }
};

export const signinUser = (
  formProps: ISignupUser,
  callback: () => void
) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/v0/auth/signin",
      formProps
    );
    localStorage.setItem("seostudio-token", res.data.token);
    dispatch({ payload: res.data.token, type: AUTH_USER });
    callback();
  } catch (err) {
    dispatch({ payload: "Invalid login credentials", type: AUTH_ERROR });
  }
};

export const signoutUser = () => {
  localStorage.removeItem("seostudio-token");
  return {
    payload: "",
    type: AUTH_USER
  };
};
