import { Product } from "../models/catalog";

export enum ActionTypes {
  LOAD_ITEM = "LOAD_ITEM",
}

export type Action = LoadItem;

export interface LoadItem {
  type: ActionTypes.LOAD_ITEM;
  payload: {
    item: Product;
  };
}

export function loadItem(item: Product): LoadItem {
  return {
    type: ActionTypes.LOAD_ITEM,
    payload: {
      item,
    },
  };
}
