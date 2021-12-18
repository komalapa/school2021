import { Shapes } from "../../types/types";
import { ReactComponent as BallIcon } from "../../assets/svg/ball1.svg";
import { ReactComponent as BellIcon } from "../../assets/svg/bell.svg";
import { ReactComponent as FigureIcon } from "../../assets/svg/toy.svg";
import { ReactComponent as PineIcon } from "../../assets/svg/pine.svg";
import { ReactComponent as SnowIcon } from "../../assets/svg/snowflake.svg";
import "./ShapeFilter.css";
import { useState } from "react";

type ShapeFilterContainerProps = {
  toggleFilter: CallableFunction;
  checked: Shapes[];
};

export function ShapeFilter(props: ShapeFilterContainerProps) {
  const [isBall, setIsBall] = useState(props.checked.indexOf(Shapes.Ball) >= 0);
  const [isBell, setIsBell] = useState(props.checked.indexOf(Shapes.Bell) >= 0);
  const [isFigure, setIsFigure] = useState(
    props.checked.indexOf(Shapes.Figure) >= 0
  );
  const [isPine, setIsPine] = useState(
    props.checked.indexOf(Shapes.Pinecone) >= 0
  );
  const [isSnow, setIsSnow] = useState(
    props.checked.indexOf(Shapes.Snowflake) >= 0
  );
  return (
    <div className="shape-filter">
      <span className="shape-filter__header">Формы</span>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => {
            setIsBall(!isBall);
            props.toggleFilter("shape", Shapes.Ball);
          }}
          checked={isBall}
        />
        <BallIcon className="shape-filter__icon" />
      </label>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => {
            setIsBell(!isBell);
            props.toggleFilter("shape", Shapes.Bell);
          }}
          checked={isBell}
        />
        <BellIcon className="shape-filter__icon" />
      </label>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => {
            setIsFigure(!isFigure);
            props.toggleFilter("shape", Shapes.Figure);
          }}
          checked={isFigure}
        />
        <FigureIcon className="shape-filter__icon" />
      </label>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => {
            setIsPine(!isPine);
            props.toggleFilter("shape", Shapes.Pinecone);
          }}
          checked={isPine}
        />
        <PineIcon className="shape-filter__icon" />
      </label>
      <label className="shape-filter__lbl">
        <input
          className="shape-filter__check"
          type="checkbox"
          onInput={() => {
            setIsSnow(!isSnow);
            props.toggleFilter("shape", Shapes.Snowflake);
          }}
          checked={isSnow}
        />
        <SnowIcon className="shape-filter__icon" />
      </label>
    </div>
  );
}
