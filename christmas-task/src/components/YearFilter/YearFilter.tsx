import { FC, useState } from "react";
import { SpanInput } from "../SpanInput/SpanInput";

import "./YearFilter.css";

type YearFilterContainerProps = {
  toggleFilter: CallableFunction;
  min: number;
  max: number;
  minVal?: number;
  maxVal?: number;
  step?: number;
};

export const YearFilter: FC<YearFilterContainerProps> = (props) => {
  const { toggleFilter, min, max, minVal, maxVal } = props;
  const [minValue, setMinValue] = useState(minVal);
  const [maxValue, setMaxValue] = useState(maxVal);

  if (minValue !== minVal) setMinValue(minVal);
  if (maxValue !== maxVal) setMaxValue(maxVal);

  function handleFilter(minFilter, maxFilter) {
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
