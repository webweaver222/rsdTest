import styled from "styled-components";
import Button from "@material-ui/core/Button";

const FiltersWrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;

  .price-filter {
    //width: 250px;
  }

  .price-filter .range-wrapper {
    padding: 7px 0;
  }

  .price-filter .inputWrapper {
    display: flex;
    align-items: center;
  }

  h4 {
    padding: 8px 0;
    text-align: left;
  }

  .price-filter .inputWrapper input {
    width: 70px;
  }

  .price-filter .inputWrapper span {
    margin: 0 7px;
  }

  button {
    margin-left: 7px;
  }

  .brand-filter {
    margin: 20px 0;
  }

  @media only screen and (max-width: 992px) {
    .price-filter .range-wrapper {
      width: 250px;
    }
  }
`;

export default FiltersWrapper;
