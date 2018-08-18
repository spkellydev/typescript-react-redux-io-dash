import * as React from "react";
import * as Navbar from "./Navbar";

let App: React.StatelessComponent<{}>;
export default (App = ({ children }) => {
  return (
    <>
      <Navbar.default />
      {children}
    </>
  );
});
