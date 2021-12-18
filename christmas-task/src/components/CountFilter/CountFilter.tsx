import { SpanInput } from "../SpanInput/SpanInput";
import "./CountFilter.css";

type CountFilterContainerProps = {
  toggleFilter: CallableFunction;
  min: number;
  max: number;
  step: number;
};

export function CountFilter(props: CountFilterContainerProps) {
  function toggleFilter(min, max) {
    props.toggleFilter("count", min, max);
  }
  return (
    <div className="count-filter">
      <h3 className="count-filter__header">Количество</h3>
      <SpanInput
        min={props.min}
        max={props.max}
        step={1}
        toggleFilter={toggleFilter}
      />
    </div>
  );
}
