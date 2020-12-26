import json from "../../mock-products.json";
import {
  loadItems,
  ActionTypes as CatalogTypes,
  changePage,
} from "../actions/catalog";
import { loadItem } from "../actions/productPage";
import {
  ActionTypes as FiltersTypes,
  ChangePriceRange,
  ChangeBrandsFilter,
  ChangeCategoriesFilter,
} from "../actions/filters";
import { Dispatch } from "react-redux";

const getData = () => (dispatch: Dispatch) => {
  return dispatch(loadItems(json.products));
};

const getSingleItem = (id: number) => (dispatch: Dispatch) => {
  return dispatch(loadItem(json.products.find((item) => item.id === id)));
};

const filterPrice = (priceRange: number[]) => (dispatch: Dispatch) => {
  dispatch(ChangePriceRange(priceRange));
  return dispatch(changePage(1));
};

const filterBrand = (brand: any) => (dispatch: Dispatch) => {
  dispatch(ChangeBrandsFilter(brand));
  return dispatch(changePage(1));
};

const filterCategory = (categories: any) => (dispatch: Dispatch) => {
  dispatch(ChangeCategoriesFilter(categories));
  return dispatch(changePage(1));
};

const reset = () => (dispatch: Dispatch) => {
  dispatch(CatalogTypes.RESET);
  return dispatch(FiltersTypes.RESET);
};

export {
  getData,
  getSingleItem,
  filterPrice,
  filterBrand,
  filterCategory,
  reset,
};
