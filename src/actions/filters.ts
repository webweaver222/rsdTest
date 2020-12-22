export enum ActionTypes {
  CHANGE_PRICE_RANGE = "CHANGE_PRICE_RANGE",
  FILTER_PRICE = "FILTER_PRICE",
  CHANGE_BRANDS_FILTER = "CHANGE_BRANDS_FILTER",
  CHANGE_CATERORIES_FILTER = "CHANGE_CATERORIES_FILTER",
  RESET = "RESET_FILTER",
}

export type Action =
  | ChangePriceRange
  | ResetFilter
  | ChangeBrandsFilter
  | ChangeCategoriesFilter;

export interface ChangePriceRange {
  type: ActionTypes.CHANGE_PRICE_RANGE;
  payload: {
    priceRange: number[];
  };
}

export interface ChangeBrandsFilter {
  type: ActionTypes.CHANGE_BRANDS_FILTER;
  payload: {
    brand: any;
  };
}

export interface ChangeCategoriesFilter {
  type: ActionTypes.CHANGE_CATERORIES_FILTER;
  payload: {
    categories: any;
  };
}

export interface ResetFilter {
  type: ActionTypes.RESET;
}

export function ChangePriceRange(priceRange: number[]): ChangePriceRange {
  return {
    type: ActionTypes.CHANGE_PRICE_RANGE,
    payload: {
      priceRange,
    },
  };
}

export function ChangeBrandsFilter(brand: any): ChangeBrandsFilter {
  return {
    type: ActionTypes.CHANGE_BRANDS_FILTER,
    payload: {
      brand,
    },
  };
}

export function ChangeCategoriesFilter(
  categories: any
): ChangeCategoriesFilter {
  return {
    type: ActionTypes.CHANGE_CATERORIES_FILTER,
    payload: {
      categories,
    },
  };
}
