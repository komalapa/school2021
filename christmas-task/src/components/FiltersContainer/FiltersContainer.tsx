import { ShapeFilter } from "../ShapeFilter/ShapeFilter";
import { SizeFilter } from "../SizeFilter/SizeFilter";
// import '../../main.css'
// import "./ToysContainer.css";

type FiltersContainerProps = {
  toggleFilter: CallableFunction;
  toggleSpanFilter: CallableFunction;
};

export function FiltersContainter(props: FiltersContainerProps) {
  return (
    <div className="filters-container">
      <ShapeFilter toggleFilter={props.toggleFilter} />
      <SizeFilter toggleFilter={props.toggleFilter} />
    </div>
  );
}
