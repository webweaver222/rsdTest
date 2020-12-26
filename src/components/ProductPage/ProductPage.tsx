import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "../../utils";

import ProductPageWrapper from "./ProductPageWrapper";
import { getSingleItem } from "../../actions";

const ProductPage = ({
  item,
  onUpdate,
  match: {
    params: { id },
  },
}) => {
  useEffect(() => {
    onUpdate(id);
  }, [id]);

  return (
    <ProductPageWrapper>
      <div className="product-left">
        <p>{item.title}</p>
        <img src={item.image} alt="" />
      </div>
      <div className="product-right">
        <div className="product-right--description">
          <h5>Product description:</h5>
          <p>{item.description}</p>
        </div>
        <div className="product-right--brand">
          <h5>Brand Name:</h5>
          <p>{item.brand}</p>
        </div>
        <div className="product-right--category">
          <h5>Category:</h5>
          <p>{item.category}</p>
        </div>
        <div className="product-right--price">{item.price} $</div>
        <button>Buy Now</button>
      </div>
    </ProductPageWrapper>
  );
};

const mapStateToProps = ({ productPage: { item } }) => ({
  item,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdate: (id: string) => dispatch(getSingleItem(Number(id))),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProductPage);
