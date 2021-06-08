import React, { useState, useEffect, ComponentType } from "react";
import { connect, Dispatch } from "react-redux";

import useDidUpdateEffect from "../components/customHooks/didUpdateEffect";
import { getFilterObject } from "../utils";
import { filterPrice, filterBrand, filterCategory } from "../actions";
import { getMaxPrice } from "../selectors";
import { Product } from "../models/catalog";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onPriceFilter: (priceRange: number[]) => dispatch(filterPrice(priceRange)),
  setBrandsFilter: (brand: any) => dispatch(filterBrand(brand)),
  setCategoriesFilter: (categories: any) =>
    dispatch(filterCategory(categories)),
});

interface FiltersContainer {
  items: Product[];
  brand: {};
  category: {};
  priceFilter: [];
  maxPrice: number;
  setBrandsFilter: Function;
  setCategoriesFilter: Function;
}

const FiltersContainer = (Wrapped: ComponentType<any>) =>
  connect(
    ({ catalog, filters: { brand, category, priceFilter } }) => ({
      items: catalog.items,
      brand,
      category,
      priceFilter,
      maxPrice: getMaxPrice(catalog),
    }),
    mapDispatchToProps
  )((props: FiltersContainer) => {
    const {
      items,
      priceFilter,
      maxPrice,
      setBrandsFilter,
      setCategoriesFilter,
    } = props;
    const [priceRange, setPriceRange] = useState([0, maxPrice]);

    const changePriceRange = (event: any, newValue: any) => {
      if (isNaN(Number(newValue[0])) || isNaN(Number(newValue[1]))) return;
      return setPriceRange([Number(newValue[0]), Number(newValue[1])]);
    };

    useEffect(() => {
      if (priceFilter.length > 0) {
        setPriceRange(priceFilter);
      }
    }, []);

    useDidUpdateEffect(() => {
      setPriceRange([0, maxPrice]);

      setBrandsFilter(getFilterObject<Product>(items, "brand"));

      setCategoriesFilter(getFilterObject<Product>(items, "category"));
    }, [maxPrice, items]);

    return (
      <Wrapped
        {...props}
        priceRange={priceRange}
        onChangePriceRange={changePriceRange}
      />
    );
  });

export default FiltersContainer;
