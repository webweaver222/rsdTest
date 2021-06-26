import styled from "styled-components";

const CatalogWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
  }

  .input-wrapper {
    position: relative;
    width: 200px;
  }

  .input-wrapper input {
    width: 100%;
    padding: 7px 25px 7px 6px;
    border-radius: 10px;
    border: 1px solid grey;
  }

  .input-wrapper .resetBtn {
    position: absolute;
    right: -86px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 13px;
    color: var(--secondary);
  }

  header .input-wrapper img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 7px;
    margin: auto 0;
    height: 15px;
    width: 15px;
    cursor: pointer;
  }

  .products {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    flex: 1 1;
    padding: 50px;
  }

  .products .product-wrapper {
    text-align: center;
    width: 33%;
    padding: 10px;
    cursor: pointer;
  }

  .products .product-wrapper:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .products .product-wrapper img {
    height: 170px;
    max-width: 180px;
  }

  .products .product-wrapper p {
    margin: 15px 0;
  }

  .products .product-wrapper span {
    color: var(--primary);
    font-weight: 800;
  }

  @media only screen and (min-width: 1600px) {
    padding: 50px 100px;

    .products .product-wrapper img {
      height: 200px;
      max-width: 180px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .products .product-wrapper {
      width: 50%;
    }

    .products .product-wrapper img {
      height: 150px;
      max-width: 180px;
    }
  }

  @media only screen and (max-width: 992px) {
    .input-wrapper {
      position: relative;
      width: 150px;
    }

    .products .product-wrapper img {
      height: 100px;
      max-width: 150px;
    }
  }

  @media only screen and (max-width: 576px) {
    padding: 20px;

    header {
      flex-direction: column;
      align-items: center;
    }

    .products {
      padding: 20px;
    }

    header .input-wrapper {
      margin-bottom: 20px;
    }
    .products .product-wrapper {
      width: 50%;
    }
  }

  @media only screen and (max-width: 450px) {
    .products .product-wrapper img {
      height: 80px;
      max-width: 100px;
    }
  }
`;

export default CatalogWrapper;
