import json from "../../mock-products.json";
import { loadItems, ActionTypes as CatalogTypes } from "../actions/catalog";
import { loadItem } from "../actions/productPage";
import { ActionTypes as FiltersTypes } from "../actions/filters";
import { Dispatch } from "react-redux";

const getData = () => (dispatch: Dispatch) => {
  return dispatch(loadItems(json.products));
};

const getSingleItem = (id) => (dispatch: Dispatch) => {
  return dispatch(loadItem(json.products.find((item) => item.id === id)));
};

const reset = () => (dispatch: Dispatch) => {
  dispatch(CatalogTypes.RESET);
  return dispatch(FiltersTypes.RESET);
};

export { getData, getSingleItem, reset };
