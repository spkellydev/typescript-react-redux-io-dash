import * as React from "react";
import { AuthChild } from "../../hoc/requireAuth";

class Dashboard extends React.Component {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return <div>Dashboard</div>;
  }
}

export default AuthChild(Dashboard);
