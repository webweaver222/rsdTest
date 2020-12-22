import React from "react";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CheckboxGroupWrapper = styled(FormControl)`
  display: flex !important;
  flex-wrap: wrap !important;
  max-height: 400px;

  span.MuiButtonBase-root {
    padding: 4px;
  }
  .MuiFormControlLabel-label {
    font-weight: 300;
    font-size: 13px;
  }
  .Mui-checked {
    color: var(--primary) !important;
  }

  @media only screen and (max-width: 992px) {
    max-height: 100px;
  }

  @media only screen and (max-width: 576px) {
    max-height: 200px;
  }
`;

export default function CheckboxGroup({
  boxes,
  onChangeBrandFilter,
}: {
  boxes: any;
  onChangeBrandFilter: Function;
}) {
  const handleChange = (box) => {
    return onChangeBrandFilter({
      ...boxes,
      [box]: boxes[box] ? false : true,
    });
  };

  return (
    <CheckboxGroupWrapper>
      {Object.keys(boxes).map((box, i) => (
        <FormControlLabel
          key={i}
          control={
            <Checkbox
              checked={boxes[box]}
              onChange={() => handleChange(box)}
              name={box}
            />
          }
          label={box}
        ></FormControlLabel>
      ))}
    </CheckboxGroupWrapper>
  );
}
