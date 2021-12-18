import { Filters, SpanFilters } from "../../types/types";
import { ColorFilter } from "../ColorFilter/ColorFilter";
import { CountFilter } from "../CountFilter/CountFilter";
import { ShapeFilter } from "../ShapeFilter/ShapeFilter";
import { SizeFilter } from "../SizeFilter/SizeFilter";
import { YearFilter } from "../YearFilter/YearFilter";
import "./FiltersContainer.css";

type FiltersContainerProps = {
  toggleFilter: CallableFunction;
  toggleSpanFilter: CallableFunction;
  filters: Filters;
  spanFilters: SpanFilters;
};

export function FiltersContainter(props: FiltersContainerProps) {
  const curYear = new Date().getFullYear();
  return (
    <div className="filters-container">
      <ShapeFilter
        toggleFilter={props.toggleFilter}
        checked={props.filters.shape}
      />
      <SizeFilter
        toggleFilter={props.toggleFilter}
        checked={props.filters.size}
      />
      <ColorFilter
        toggleFilter={props.toggleFilter}
        checked={props.filters.color}
      />
      <YearFilter
        toggleFilter={props.toggleSpanFilter}
        min={1940}
        max={curYear + 1}
        step={1}
      />
      <CountFilter
        toggleFilter={props.toggleSpanFilter}
        min={1}
        max={20}
        step={1}
      />
    </div>
  );
}
