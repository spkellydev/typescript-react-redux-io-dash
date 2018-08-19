import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { ISignupProps, ISignupUser } from "../../interfaces";

import * as actions from "../../actions";

export class Signup extends React.Component<
  InjectedFormProps<ISignupUser> & ISignupProps
> {
  public static mapStateToProps(state: any) {
    return { errorMessage: state.auth.errorMessage };
  }

  public onSumbit = (formProps: any): void => {
    this.props.signupUser(formProps, () => {
      this.props.history.push("/dashboard");
    });
  };

  public render() {
    const { handleSubmit, errorMessage } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSumbit)}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            autoComplete="none"
            type="text"
            component="input"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            autoComplete="none"
            type="password"
            component="input"
          />
        </fieldset>
        <div>{errorMessage}</div>
        <input type="submit" />
      </form>
    );
  }
}

export default compose(
  connect(
    Signup.mapStateToProps,
    actions
  ),
  reduxForm<ISignupUser>({
    form: "signup"
  })
)(Signup);
