import { ShapeFilter } from "../ShapeFilter/ShapeFilter";
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
    </div>
  );
}
