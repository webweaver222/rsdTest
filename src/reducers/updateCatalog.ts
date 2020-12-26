import { Catalog } from "../models/catalog";
import { Action, ActionTypes } from "../actions/catalog";

const initialCatalog: Catalog = {
  items: [],
  currentPage: 1,
  searchTerm: "",
};

const updateCatalog = (catalog: Catalog, action: Action): Catalog => {
  if (typeof catalog === "undefined") return initialCatalog;

  switch (action.type) {
    case ActionTypes.LOAD_ITEMS: {
      return {
        ...catalog,
        items: action.payload.items,
      };
    }

    case ActionTypes.CHANGE_PAGE: {
      return {
        ...catalog,
        currentPage: action.payload.page,
      };
    }

    case ActionTypes.CLICK_SEARCH: {
      return {
        ...catalog,
        searchTerm: action.payload.text,
      };
    }

    case ActionTypes.RESET: {
      return {
        ...catalog,
        searchTerm: initialCatalog.searchTerm,
      };
    }

    default:
      return catalog;
  }
};

export default updateCatalog;
