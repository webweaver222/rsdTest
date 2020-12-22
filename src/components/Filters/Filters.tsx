import React, { useState } from "react";
import FiltersWrapper from "./FiltersWrapper";
import Range from "../elements/Range";
import CheckboxGroup from "../elements/CheckboxGroup";

import FiltersContainer from "../../containers/Filters";

const Filters = ({
  priceRange,
  maxPrice,
  brand,
  category,
  onChangePriceRange,
  onPriceFilter,
  setBrandsFilter,
  setCategoriesFilter,
}) => (
  <FiltersWrapper className="filters-wrapper">
    <div className="price-filter">
      <h4>Price</h4>
      <div className="inputWrapper">
        <input
          type="text"
          value={priceRange[0]}
          onChange={(e) =>
            onChangePriceRange(e, [e.target.value, priceRange[1]])
          }
        />
        <span> - </span>
        <input
          type="text"
          value={priceRange[1]}
          onChange={(e) =>
            onChangePriceRange(e, [priceRange[0], e.target.value])
          }
        />
        <button onClick={() => onPriceFilter(priceRange)}>OK</button>
      </div>
      <div className="range-wrapper">
        <Range
          range={priceRange}
          onChange={onChangePriceRange}
          max={maxPrice}
        />
      </div>
    </div>
    <div className="brand-filter">
      <h4>Brands</h4>
      <CheckboxGroup boxes={brand} onChangeBrandFilter={setBrandsFilter} />
    </div>
    <div className="cat-filter">
      <h4>Categories</h4>
      <CheckboxGroup
        boxes={category}
        onChangeBrandFilter={setCategoriesFilter}
      />
    </div>
  </FiltersWrapper>
);

export default FiltersContainer(Filters);
