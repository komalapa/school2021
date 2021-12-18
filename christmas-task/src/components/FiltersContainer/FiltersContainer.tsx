import { ColorFilter } from "../ColorFilter/ColorFilter";
import { CountFilter } from "../CountFilter/CountFilter";
import { ShapeFilter } from "../ShapeFilter/ShapeFilter";
import { SizeFilter } from "../SizeFilter/SizeFilter";
import { YearFilter } from "../YearFilter/YearFilter";
// import '../../main.css'
import "./FiltersContainer.css";

type FiltersContainerProps = {
  toggleFilter: CallableFunction;
  toggleSpanFilter: CallableFunction;
};

export function FiltersContainter(props: FiltersContainerProps) {
  const curYear = new Date().getFullYear();
  return (
    <div className="filters-container">
      <ShapeFilter toggleFilter={props.toggleFilter} />
      <SizeFilter toggleFilter={props.toggleFilter} />
      <ColorFilter toggleFilter={props.toggleFilter} />
      <YearFilter
        toggleFilter={props.toggleSpanFilter}
        min={1940}
        max={curYear + 1}
        step={1}
      />
      <CountFilter
        toggleFilter={props.toggleSpanFilter}
        min={1}
        max={10}
        step={1}
      />
    </div>
  );
}
