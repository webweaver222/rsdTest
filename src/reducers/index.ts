import { combineReducers } from "redux";
import updateCatalog from "./updateCatalog";
import updateFilters from "./updateFilters";
import updateProductPage from "./updateProductPage";

import { Catalog, ProdcutPage } from "../models/catalog";
import { Filters } from "../models/filters";

export interface State {
  catalog: Catalog;
  filters: Filters;
  productPage: ProdcutPage;
}

const reducer = combineReducers<State>({
  catalog: updateCatalog,
  filters: updateFilters,
  productPage: updateProductPage,
});

export default reducer;
