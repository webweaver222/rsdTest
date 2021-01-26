import { Product } from "../../models/catalog";
export interface Catalog {
  items: Product[];
  totalItemsNum: number;
  totalPages: number;
  currentPage: number;
  onPageChange: Function;
  onSearch: Function;
  onReset: Function;
  onProductClick: Function;
}
