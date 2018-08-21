import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap/lib";

export default class PrimaryNavbar extends React.Component {
  public render() {
    return (
      <Navbar collapseOnSelect={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">SEO Studio</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={"signup"} href="/signup">
              Signup
            </NavItem>
            <NavItem eventKey={"signin"} href="/signin">
              Signin
            </NavItem>
            <NavItem eventKey={"signout"} href="/signout">
              Sign Out
            </NavItem>
            <NavItem eventKey={"dashboard"} href="/dashboard">
              Dashboard
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
