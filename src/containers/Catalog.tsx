import React, { ComponentType } from "react";
import { connect, Dispatch } from "react-redux";
import { withRouter, History } from "react-router-dom";
import { Product } from "../models/catalog";
import { changePage, ClickSearch } from "../actions/catalog";
import { reset } from "../actions";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) =>
    dispatch(changePage(value)),
  onSearch: (text: string) => dispatch(ClickSearch(text)),
  onReset: () => dispatch(reset()),
});

interface CatalogContainer {
  items: Product[];
  currentPage: number;
  priceFilter: [];
  searchTerm: string;
  brand: {};
  category: {};
  history: History;
}

const CatalogContainer = (Wrapped: ComponentType<any>) =>
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
    )((props: CatalogContainer) => {
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
