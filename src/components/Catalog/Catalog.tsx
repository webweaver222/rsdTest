import React, { useState } from "react";
import { Catalog as CatalogInterface } from "./type";

import CatalogContainer from "../../containers/Catalog";
import CatalogWrapper from "./CatalogWrapper";
import CustomPagination from "../elements/Pagination";

import { compose } from "../../utils";
import { WithFilter as Filtred } from "../hoc/withFilter";
import { WithPagination as Paginated } from "../hoc/withPagination";

const Catalog = ({
  items,
  totalItemsNum,
  totalPages,
  currentPage,
  onPageChange,
  onSearch,
  onReset,
  onProductClick,
}: CatalogInterface) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <CatalogWrapper className="catalog-wrapper">
      <header>
        <div className="input-wrapper">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <img
            src="src/resources/svg/magnifying-glass.svg"
            alt="search"
            onClick={() => {
              onSearch(searchInput);
              return setSearchInput("");
            }}
          />
          <div
            className="resetBtn"
            onClick={() => {
              onReset();
            }}
          >
            Show All ({totalItemsNum})
          </div>
        </div>

        <CustomPagination
          count={totalPages}
          page={currentPage}
          onChange={onPageChange}
        />
      </header>

      <section className="products">
        {items &&
          items.map((item) => (
            <div
              className="product-wrapper"
              key={item.id}
              onClick={() => onProductClick(item.id)}
            >
              <img src={item.image} alt="productImg" />
              <p>{item.title}</p>
              <span>{item.price} $</span>
            </div>
          ))}
      </section>
    </CatalogWrapper>
  );
};

export default compose(CatalogContainer, Filtred, Paginated)(Catalog);
