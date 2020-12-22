import { Catalog, Product } from "../models/catalog";
import { createSelector } from "reselect";

export const getMaxPrice = createSelector(
  (catalog: Catalog) => catalog.items,
  (items: Product[]): number => Math.max(...items.map((item) => item.price))
);
