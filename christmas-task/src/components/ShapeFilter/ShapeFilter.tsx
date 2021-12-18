import { Shapes } from "../../types/types";
import { ReactComponent as BallIcon } from "../../assets/svg/ball1.svg";
import { ReactComponent as BellIcon } from "../../assets/svg/bell.svg";
import { ReactComponent as FigureIcon } from "../../assets/svg/toy.svg";
import { ReactComponent as PineIcon } from "../../assets/svg/pine.svg";
import { ReactComponent as SnowIcon } from "../../assets/svg/snowflake.svg";
import "./ShapeFilter.css";
import { isPropertySignature } from "typescript";

type ShapeFilterContainerProps = {
  toggleFilter: CallableFunction;
  checked: Shapes[];
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
          // checked={props.checked.indexOf(Shapes.Ball) >= 0}
        />
        <BallIcon className="shape-filter__icon" />
      </label>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("shape", Shapes.Bell)}
          // checked={props.checked.indexOf(Shapes.Bell) >= 0}
        />
        <BellIcon className="shape-filter__icon" />
      </label>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("shape", Shapes.Figure)}
          // checked={props.checked.indexOf(Shapes.Figure) >= 0}
        />
        <FigureIcon className="shape-filter__icon" />
      </label>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("shape", Shapes.Pinecone)}
          // checked={props.checked.indexOf(Shapes.Pinecone) >= 0}
        />
        <PineIcon className="shape-filter__icon" />
      </label>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("shape", Shapes.Snowflake)}
          // checked={props.checked.indexOf(Shapes.Snowflake) >= 0}
        />
        <SnowIcon className="shape-filter__icon" />
      </label>
    </div>
  );
}
