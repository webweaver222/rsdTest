import { Product } from "../models/catalog";

export enum ActionTypes {
  LOAD_ITEMS = "LOAD_ITEMS",
  CHANGE_PAGE = "CHANGE_PAGE",
  CLICK_SEARCH = "CLICK_SEARCH",
  RESET = "RESET_CATALOG",
}

export type Action = LoadItems | ChangePage | ClickSearch | Reset;

export interface LoadItems {
  type: ActionTypes.LOAD_ITEMS;
  payload: {
    items: Product[];
  };
}

export interface ChangePage {
  type: ActionTypes.CHANGE_PAGE;
  payload: {
    page: number;
  };
}

export interface ClickSearch {
  type: ActionTypes.CLICK_SEARCH;
  payload: {
    text: string;
  };
}

export interface Reset {
  type: ActionTypes.RESET;
}

export function loadItems(items: Product[]): LoadItems {
  return {
    type: ActionTypes.LOAD_ITEMS,
    payload: {
      items,
    },
  };
}

export function changePage(page: number): ChangePage {
  return {
    type: ActionTypes.CHANGE_PAGE,
    payload: {
      page,
    },
  };
}

export function ClickSearch(text: string): ClickSearch {
  return {
    type: ActionTypes.CLICK_SEARCH,
    payload: {
      text,
    },
  };
}
