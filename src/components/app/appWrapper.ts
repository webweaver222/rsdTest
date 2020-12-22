import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  overflow: hidden;

  .catalog-wrapper {
    flex: 1 1;
    min-height: 100%;
  }

  .filters-wrapper {
    width: 300px;
    min-height: 100%;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;

    .filters-wrapper {
      width: 100%;
    }
  }

  @media only screen and (max-height: 768px) {
    overflow: auto;
  }
`;

export { AppWrapper };
