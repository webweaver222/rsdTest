import { Filters } from "../models/filters";
import { Action, ActionTypes } from "../actions/filters";

const initialFilters: Filters = {
  priceFilter: [],
  category: {},
  brand: {},
};

const updateFilters = (filters: Filters, action: Action): Filters => {
  if (typeof filters === "undefined") return initialFilters;

  switch (action.type) {
    case ActionTypes.CHANGE_PRICE_RANGE: {
      return {
        ...filters,
        priceFilter: action.payload.priceRange,
      };
    }

    case ActionTypes.CHANGE_BRANDS_FILTER: {
      return {
        ...filters,
        brand: action.payload.brand,
      };
    }

    case ActionTypes.CHANGE_CATERORIES_FILTER: {
      return {
        ...filters,
        category: action.payload.categories,
      };
    }

    case ActionTypes.RESET: {
      const defaultBrand = {};
      Object.keys(filters.brand).forEach((p) => (defaultBrand[p] = false));

      const defaultCategory = {};
      Object.keys(filters.category).forEach(
        (p) => (defaultCategory[p] = false)
      );
      return {
        ...filters,
        priceFilter: initialFilters.priceFilter,
        category: defaultCategory,
        brand: defaultBrand,
      };
    }

    default:
      return filters;
  }
};

export default updateFilters;
