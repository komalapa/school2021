import { useState } from "react";
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

export function YearFilter(props: YearFilterContainerProps) {
  const [minVal, setMinVal] = useState(props.values.min);
  const [maxVal, setMaxVal] = useState(props.values.max);
  function toggleFilter(min, max) {
    setMaxVal(max);
    setMinVal(min);
    props.toggleFilter("year", min, max);
  }
  return (
    <div className="Year-filter">
      <h3 className="Year-filter__header">Год покупки</h3>
      <SpanInput
        min={props.min}
        max={props.max}
        maxVal={maxVal}
        minVal={minVal}
        step={1}
        toggleFilter={toggleFilter}
      />
    </div>
  );
}
