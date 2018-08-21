import * as React from "react";
import { default as Navbar } from "./Navbar";

let App: React.StatelessComponent<{}>;
export default (App = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
});
