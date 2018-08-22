import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap/lib";
import { connect } from "react-redux";

class PrimaryNavbar extends React.Component<any> {
  public static mapStateToProps(state: any) {
    return { authenticated: state.auth.authenticated };
  }

  public renderLinks() {
    if (this.props.authenticated) {
      return (
        <>
          <NavItem eventKey={"signout"} href="/signout">
            Sign Out
          </NavItem>
          <NavItem eventKey={"dashboard"} href="/dashboard">
            Dashboard
          </NavItem>
        </>
      );
    } else {
      return (
        <>
          <NavItem eventKey={"signup"} href="/signup">
            Signup
          </NavItem>
          <NavItem eventKey={"signin"} href="/signin">
            Signin
          </NavItem>
        </>
      );
    }
  }

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
          <Nav>{this.renderLinks()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default connect(PrimaryNavbar.mapStateToProps)(PrimaryNavbar);
