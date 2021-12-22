import { FC, useState } from "react";
import { SpanObject } from "../../types/types";
import { SpanInput } from "../SpanInput/SpanInput";

import "./YearFilter.css";

type YearFilterContainerProps = {
  toggleFilter: CallableFunction;
  min: number;
  max: number;
  step: number;
  values: SpanObject;
};

export const YearFilter: FC<YearFilterContainerProps> = (props) => {
  const { toggleFilter, min, max, values } = props;

  const [minVal, setMinVal] = useState(values.min);
  const [maxVal, setMaxVal] = useState(values.max);
  function handleFilter(min, max) {
    setMaxVal(max);
    setMinVal(min);
    toggleFilter("year", min, max);
  }
  return (
    <div className="Year-filter">
      <h3 className="Year-filter__header">Год покупки</h3>
      <SpanInput
        min={min}
        max={max}
        maxVal={maxVal}
        minVal={minVal}
        step={1}
        toggleFilter={handleFilter}
      />
    </div>
  );
};
