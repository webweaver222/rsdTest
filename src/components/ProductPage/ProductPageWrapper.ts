import styled from "styled-components";

const ProductPageWrapper = styled.div`
  padding: 150px 50px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  line-height: 20px;

  .product-left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-left p {
    font-size: 18px;
    font-weight: bold;
    width: 500px;
    line-height: 25px;
    text-align: center;
  }

  .product-left img {
    height: 300px;
    margin-top: 30px;
  }

  .product-right p {
    width: 300px;
  }

  .product-right h5 {
    color: var(--secondary);
    margin-bottom: 10px;
  }

  .product-right--description,
  .product-right--brand,
  .product-right--category,
  .product-right--price {
    padding-bottom: 15px;
  }

  .product-right--price {
    font-size: 20px;
    color: var(--secondary);
  }

  button {
    border: none;
    background-color: var(--primary);
    color: white;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 0;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    padding: 30px 50px;

    .product-left {
      margin-bottom: 45px;
    }
  }

  @media only screen and (max-width: 567px) {
    padding: 30px 15px;

    .product-left p {
      width: 300px;
    }

    .product-left img {
      height: initial;
      max-width: 250px;
    }
  }
`;

export default ProductPageWrapper;
