import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { getData } from "../../actions";

import { AppWrapper } from "./appWrapper";
import Catalog from "../Catalog";
import Filters from "../Filters";

const App = ({ mount }) => {
  useEffect(() => {
    mount();
  }, []);

  return (
    <AppWrapper>
      <Switch>
        <Route path="/">
          <Filters />
          <Catalog />
        </Route>

        <Route path="/products/:id?">
          {
            //<ProductPage />
          }
        </Route>
      </Switch>
    </AppWrapper>
  );
};

export default connect(null, (dispatch) => ({
  mount: () => dispatch(getData()),
}))(App);
