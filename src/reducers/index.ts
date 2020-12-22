import { combineReducers } from "redux";
import updateAuth from "./updateAuth";
import updateCart from "./updateCart";
import updatePunchase from "./updatePunchase";
import updateCatalog from "./updateCatalog";
import updateFilters from "./updateFilters";

import { Auth } from "../models/auth";
import { Cart } from "../models/cart";
import { Punchase } from "../models/puchase";
import { Catalog } from "../models/catalog";
import { Filters } from "../models/filters";

export interface State {
  auth: Auth;
  cart: Cart;
  punchase: Punchase;
  catalog: Catalog;
  filters: Filters;
}

const reducer = combineReducers<State>({
  auth: updateAuth,
  cart: updateCart,
  punchase: updatePunchase,
  catalog: updateCatalog,
  filters: updateFilters,
});

export default reducer;
