import * as React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  public render() {
    return (
      <div>
        <Link to="/">SEO Studio</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signout">Sign Out</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    );
  }
}
