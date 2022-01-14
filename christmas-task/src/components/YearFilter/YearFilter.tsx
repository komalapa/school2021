import React, { FC, useState } from "react";
import type { YearFilterContainerProps } from "../../types/props";
import { SpanInput } from "../SpanInput/SpanInput";

import "./YearFilter.css";

export const YearFilter: FC<YearFilterContainerProps> = (props) => {
  const { toggleFilter, min, max, minVal, maxVal } = props;
  const [minValue, setMinValue] = useState(minVal);
  const [maxValue, setMaxValue] = useState(maxVal);

  if (minValue !== minVal) setMinValue(minVal);
  if (maxValue !== maxVal) setMaxValue(maxVal);

  function handleFilter(minFilter: number, maxFilter: number) {
    setMaxValue(maxFilter);
    setMinValue(minFilter);
    toggleFilter("year", minFilter, maxFilter);
  }
  return (
    <div className="Year-filter">
      <h3 className="Year-filter__header">Год покупки</h3>
      <SpanInput
        min={min}
        max={max}
        maxVal={maxValue}
        minVal={minValue}
        step={1}
        toggleFilter={handleFilter}
      />
    </div>
  );
};
