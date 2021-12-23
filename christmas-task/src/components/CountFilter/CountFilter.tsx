import { FC, useState } from "react";
import { SpanInput } from "../SpanInput/SpanInput";
import "./CountFilter.css";

type CountFilterContainerProps = {
  toggleFilter: CallableFunction;
  min: number;
  max: number;
  minVal?: number;
  maxVal?: number;
  step?: number;
};

export const CountFilter: FC<CountFilterContainerProps> = (props) => {
  const { toggleFilter, min, max, minVal, maxVal } = props;
  const [minValue, setMinValue] = useState(minVal);
  const [maxValue, setMaxValue] = useState(maxVal);

  if (minValue !== minVal) setMinValue(minVal);
  if (maxValue !== maxVal) setMaxValue(maxVal);

  function handleFilter(minFilter, maxFilter) {
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
