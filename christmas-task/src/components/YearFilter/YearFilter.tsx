import { SpanInput } from "../SpanInput/SpanInput";
import "./YearFilter.css";

type YearFilterContainerProps = {
  toggleFilter: CallableFunction;
  min: number;
  max: number;
  step: number;
};

export function YearFilter(props: YearFilterContainerProps) {
  function toggleFilter(min, max) {
    props.toggleFilter("year", min, max);
  }
  return (
    <div className="Year-filter">
      <h3 className="Year-filter__header">Год покупки</h3>
      <SpanInput
        min={props.min}
        max={props.max}
        step={1}
        toggleFilter={toggleFilter}
      />
    </div>
  );
}
