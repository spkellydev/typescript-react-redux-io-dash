import * as React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

export function AuthChild<P extends { history: string[] }>(
  ChildComponent: React.ComponentType<P>
) {
  class ComposedComponent extends React.Component<P & { auth: boolean }> {
    // for users who go directly to page
    public componentDidMount() {
      this.shouldNavigateAway();
    }

    // for users who are already on page, but have logged out (ex: Sign out button)
    public componentDidUpdate() {
      this.shouldNavigateAway();
    }

    // leverages react-router history to change page
    public shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    public render() {
      const { auth, ...rest } = this.props as any;
      return <ChildComponent {...rest as P} />;
    }
  }
  // map auth state into ChildComponent
  function mapStateToProps(state: any) {
    console.log(state);
    return { auth: state.auth.authenticated };
  }
  // too explicitly typed
  return connect(
    mapStateToProps,
    actions
  )(ComposedComponent as any);
}
