import { FC } from "react";
import { SpanInput } from "../SpanInput/SpanInput";
import "./CountFilter.css";

type CountFilterContainerProps = {
  toggleFilter: CallableFunction;
  min: number;
  max: number;
  step?: number;
};

export const CountFilter: FC<CountFilterContainerProps> = (props) => {
  const { toggleFilter, min, max } = props;
  function handleFilter(min, max) {
    toggleFilter("count", min, max);
  }
  return (
    <div className="count-filter">
      <h3 className="count-filter__header">Количество</h3>
      <SpanInput min={min} max={max} step={1} toggleFilter={handleFilter} />
    </div>
  );
};
