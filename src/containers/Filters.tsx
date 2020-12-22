import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  ChangePriceRange,
  ChangeBrandsFilter,
  ChangeCategoriesFilter,
} from "../actions/filters";
import { getMaxPrice } from "../selectors";
import { Product } from "../models/catalog";

const mapDispatchToProps = (dispatch) => ({
  onPriceFilter: (priceRange: number[]) =>
    dispatch(ChangePriceRange(priceRange)),
  setBrandsFilter: (brand: any) => dispatch(ChangeBrandsFilter(brand)),
  setCategoriesFilter: (categories: any) =>
    dispatch(ChangeCategoriesFilter(categories)),
});

const FiltersContainer = (Wrapped) =>
  connect(
    ({ catalog, filters: { brand, category } }) => ({
      items: catalog.items,
      brand,
      category,
      maxPrice: getMaxPrice(catalog),
    }),
    mapDispatchToProps
  )((props) => {
    const [priceRange, setPriceRange] = useState([0, 0]);

    useEffect(() => {
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
