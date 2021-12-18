import { Shapes } from "../../types/types";
import { ReactComponent as BallIcon } from "../../assets/svg/ball1.svg";
import { ReactComponent as BellIcon } from "../../assets/svg/bell.svg";
import { ReactComponent as FigureIcon } from "../../assets/svg/toy.svg";
import { ReactComponent as PineIcon } from "../../assets/svg/pine.svg";
import { ReactComponent as SnowIcon } from "../../assets/svg/snowflake.svg";
import "./ShapeFilter.css";

type ShapeFilterContainerProps = {
  toggleFilter: CallableFunction;
};

export function ShapeFilter(props: ShapeFilterContainerProps) {
  return (
    <div className="shape-filter">
      <span className="shape-filter__header">Формы</span>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("shape", Shapes.Ball)}
        />
        <BallIcon className="shape-filter__icon" />
      </label>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("shape", Shapes.Bell)}
        />
        <BellIcon className="shape-filter__icon" />
      </label>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("shape", Shapes.Figure)}
        />
        <FigureIcon className="shape-filter__icon" />
      </label>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("shape", Shapes.Pinecone)}
        />
        <PineIcon className="shape-filter__icon" />
      </label>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("shape", Shapes.Snowflake)}
        />
        <SnowIcon className="shape-filter__icon" />
      </label>
    </div>
  );
}
