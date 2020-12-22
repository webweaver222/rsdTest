import json from "../../mock-products.json";
import { loadItems, ActionTypes as CatalogTypes } from "../actions/catalog";
import { ActionTypes as FiltersTypes } from "../actions/filters";
import { ChangePriceRange, ChangeBrandsFilter } from "../actions/filters";

const getData = () => (dispatch) => {
  return dispatch(loadItems(json.products));
};

const reset = () => (dispatch) => {
  dispatch(CatalogTypes.RESET);
  return dispatch(FiltersTypes.RESET);
};

export { getData, reset };
