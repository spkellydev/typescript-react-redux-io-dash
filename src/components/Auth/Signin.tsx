import * as React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { ISignupProps, ISignupUser } from "../../interfaces";

import * as actions from "../../actions";

class Signin extends React.Component<
  InjectedFormProps<ISignupUser> & ISignupProps
> {
  public static mapStateToProps(state: any) {
    return { auth: state.auth.errorMessage };
  }

  public onSubmit = (formProps: ISignupUser) => {
    this.props.signinUser(formProps, () => {
      this.props.history.push("/dashboard");
    });
  };

  public render() {
    const { handleSubmit, errorMessage } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
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
    Signin.mapStateToProps,
    actions
  ),
  reduxForm<ISignupUser>({
    form: "signin"
  })
)(Signin);
