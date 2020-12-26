import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import useDidUpdateEffect from "../components/customHooks/didUpdateEffect";

import {
  filterPrice, filterBrand, filterCategory
} from "../actions";
import { getMaxPrice } from "../selectors";
import { Product } from "../models/catalog";

const mapDispatchToProps = (dispatch) => ({
  onPriceFilter: (priceRange: number[]) =>
    dispatch(filterPrice(priceRange)),
  setBrandsFilter: (brand: any) => dispatch(filterBrand(brand)),
  setCategoriesFilter: (categories: any) =>
    dispatch(filterCategory(categories)),
});

const FiltersContainer = (Wrapped) =>
  connect(
    ({ catalog, filters: { brand, category, priceFilter } }) => ({
      items: catalog.items,
      brand,
      category,
      priceFilter,
      maxPrice: getMaxPrice(catalog),
    }),
    mapDispatchToProps
  )((props) => {
    const [priceRange, setPriceRange] = useState([0, props.maxPrice]);

    useEffect(() => {
      if (props.priceFilter.length > 0) {
        setPriceRange(props.priceFilter);
      }
    }, []);

    useDidUpdateEffect(() => {
      setPriceRange([0, props.maxPrice]);

      const brands = [
        ...new Set(props.items.map((item: Product) => item.brand)),
      ];
      props.setBrandsFilter(
        brands.reduce((o: object, key: string) => ({ ...o, [key]: false }), {})
      );

      const categories = [
        ...new Set(props.items.map((item: Product) => item.category)),
      ];

      props.setCategoriesFilter(
        categories.reduce(
          (o: object, key: string) => ({ ...o, [key]: false }),
          {}
        )
      );
    }, [props.maxPrice, props.items]);

    return (
      <Wrapped
        {...props}
        priceRange={priceRange}
        onChangePriceRange={(event: any, newValue: any) => {
          if (isNaN(Number(newValue[0])) || isNaN(Number(newValue[1]))) return;
          return setPriceRange([Number(newValue[0]), Number(newValue[1])]);
        }}
      />
    );
  });

export default FiltersContainer;
