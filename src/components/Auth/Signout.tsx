import * as React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { ISignupProps } from "../../interfaces/auth";

class Signout extends React.Component<ISignupProps> {
  public componentDidMount() {
    this.props.signoutUser();
  }
  public render() {
    return <h1>Signing out...</h1>;
  }
}

export default connect(
  null,
  actions
)(Signout);
