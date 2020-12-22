import React from "react";
import { connect } from "react-redux";

import { changePage, ClickSearch } from "../actions/catalog";
import { reset } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) =>
    dispatch(changePage(value)),
  onSearch: (text: string) => dispatch(ClickSearch(text)),
  onReset: () => dispatch(reset()),
});

const CatalogContainer = (Wrapped) =>
  connect(
    ({
      catalog: { items, currentPage, searchTerm },
      filters: { priceFilter, brand, category },
    }) => ({
      items,
      currentPage,
      priceFilter,
      searchTerm,
      brand,
      category,
    }),
    mapDispatchToProps
  )((props) => {
    return <Wrapped {...props} totalItemsNum={props.items.length} />;
  });

export default CatalogContainer;
