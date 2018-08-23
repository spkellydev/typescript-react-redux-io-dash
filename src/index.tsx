import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { applyMiddleware, createStore, Store } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import Signin from "./components/Auth/Signin"; // TODO: move to Views
import Signout from "./components/Auth/Signout"; // TODO: move to Views
import Signup from "./components/Auth/Signup"; // TODO: move to Views
import { default as Navbar } from "./components/Navbar";
import Welcome from "./components/Welcome";
import socket from "./middleware/sockets";
import reducers from "./reducers";
import Dashboard from "./views/dashboard/index";

import registerServiceWorker from "./registerServiceWorker";
let store: Store;
store = createStore(reducers, {}, applyMiddleware(reduxThunk, socket));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Navbar />
        <App>
          <Route path="/" exact={true} component={Welcome} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route path="/dashboard" component={Dashboard} />
        </App>
      </>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
