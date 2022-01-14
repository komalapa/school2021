import React, { FC, useState } from "react";
import type { CountFilterContainerProps } from "../../types/props";
import { SpanInput } from "../SpanInput/SpanInput";
import "./CountFilter.css";

export const CountFilter: FC<CountFilterContainerProps> = (props) => {
  const { toggleFilter, min, max, minVal, maxVal } = props;
  const [minValue, setMinValue] = useState<number | undefined>(minVal);
  const [maxValue, setMaxValue] = useState<number | undefined>(maxVal);

  if (minValue !== minVal) setMinValue(minVal);
  if (maxValue !== maxVal) setMaxValue(maxVal);

  function handleFilter(minFilter: number, maxFilter: number) {
    setMaxValue(maxFilter);
    setMinValue(minFilter);
    toggleFilter("count", minFilter, maxFilter);
  }
  return (
    <div className="count-filter">
      <h3 className="count-filter__header">Количество</h3>
      <SpanInput
        min={min}
        max={max}
        step={1}
        toggleFilter={handleFilter}
        minVal={minVal}
        maxVal={maxVal}
      />
    </div>
  );
};
