import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { AppWrapper } from "./appWrapper";
import Catalog from "../Catalog";
import Filters from "../Filters";
import ProductPage from "../ProductPage";
import { getData } from "../../actions";

const App = ({ mount }) => {
  useEffect(() => {
    mount();
  }, []);

  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/">
          <Filters />
          <Catalog />
        </Route>

        <Route exact path="/:id?">
          <ProductPage />
        </Route>
      </Switch>
    </AppWrapper>
  );
};

export default connect(null, (dispatch) => ({
  mount: () => dispatch(getData()),
}))(App);
