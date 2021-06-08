import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import GlobalStyles from "./components/theme/globalStyles";

import App from "./components/app";

import store from "./store";

const history = createBrowserHistory({
  basename: "shop",
});

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <GlobalStyles />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
