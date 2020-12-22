export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  image: string;
}

export interface Catalog {
  items: Product[];
  currentPage: number;
  searchTerm: string;
}
