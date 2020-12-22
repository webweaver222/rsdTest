import React from "react";
import { connect } from "react-redux";

const WithPagination = (Wrapped) => (props) => {
  const { currentPage, items } = props;
  const onPage = 6;
  const totalPages = Math.ceil(items.length / onPage);
  const currentPageItems = items.slice(
    currentPage * onPage - onPage,
    currentPage * onPage
  );
  return (
    <Wrapped {...props} items={currentPageItems} totalPages={totalPages} />
  );
};

export { WithPagination };
