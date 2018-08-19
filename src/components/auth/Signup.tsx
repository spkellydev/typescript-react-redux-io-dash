import * as React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

export class Signup extends React.Component<InjectedFormProps> {
  public render() {
    return (
      <form>
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
      </form>
    );
  }
}

export default reduxForm({
  form: "signup"
})(Signup);
