import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { changePage, ClickSearch } from "../actions/catalog";
import { reset } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) =>
    dispatch(changePage(value)),
  onSearch: (text: string) => dispatch(ClickSearch(text)),
  onReset: () => dispatch(reset()),
});

const CatalogContainer = (Wrapped) =>
  withRouter(
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
      return (
        <Wrapped
          {...props}
          totalItemsNum={props.items.length}
          onProductClick={(id: string) => props.history.push("/" + id)}
        />
      );
    })
  );

export default CatalogContainer;
