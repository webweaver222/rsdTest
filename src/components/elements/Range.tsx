import React from "react";
import styled from "styled-components";
import Slider from "@material-ui/core/Slider";

const StyledSlider = styled(Slider)`
  color: var(--primary) !important;
`;

const Range = ({ max, range, onChange }) => {
  return (
    <StyledSlider
      value={range}
      onChange={onChange}
      valueLabelDisplay="off"
      aria-labelledby="range-slider"
      max={max}
    />
  );
};

export default Range;
