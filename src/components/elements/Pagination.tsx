import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";

const StyledPagination = styled(Pagination)`
  color: pink;
`;

const CustomPagination = ({
  count,
  page,
  onChange,
}: {
  count: number;
  page: number;
  onChange: any;
}) => <StyledPagination count={count} page={page} onChange={onChange} />;

export default CustomPagination;
