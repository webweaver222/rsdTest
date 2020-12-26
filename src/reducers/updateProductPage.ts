import { ProdcutPage } from "../models/catalog";
import { Action, ActionTypes } from "../actions/productPage";

const initialProductPage: ProdcutPage = {
  item: {
    id: null,
    title: "",
    price: null,
    description: "",
    category: "",
    brand: "",
    image: "",
  },
};

const updateProductPage = (
  productPage: ProdcutPage,
  action: Action
): ProdcutPage => {
  if (typeof productPage === "undefined") return initialProductPage;

  switch (action.type) {
    case ActionTypes.LOAD_ITEM: {
      return {
        ...productPage,
        item: action.payload.item,
      };
    }

    default:
      return productPage;
  }
};

export default updateProductPage;
