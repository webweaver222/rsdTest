import React, { useMemo } from "react";
import { Product } from "../../models/catalog";

const WithFilter = (Wrapped) => (props) => {
  const {
    items,
    priceFilter,
    searchTerm,
    brand,
    category,
  }: {
    items: Product[];
    priceFilter: number[];
    searchTerm: string;
    brand: object;
    category: object;
  } = props;

  let filtred = items;

  filtred = useMemo(() => {
    return priceFilter.length > 0
      ? items.filter((item) => {
          return item.price >= priceFilter[0] && item.price <= priceFilter[1];
        })
      : items;
  }, [items, priceFilter, searchTerm]);

  if (searchTerm) {
    filtred = filtred.filter((item) => item.title.indexOf(searchTerm) > -1);
  }
  //////////////////////////////////////////
  if (Object.keys(brand).some((item) => brand[item])) {
    filtred = filtred.filter((item) => brand[item.brand]);
  }

  if (Object.keys(category).some((item) => category[item])) {
    filtred = filtred.filter((item) => category[item.category]);
  }

  return <Wrapped {...props} items={filtred} />;
};

export { WithFilter };
