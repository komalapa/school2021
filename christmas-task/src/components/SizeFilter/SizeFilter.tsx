import { Size } from "../../types/types";
import { ReactComponent as BallIcon } from "../../assets/svg/ball1.svg";
import { ReactComponent as BellIcon } from "../../assets/svg/bell.svg";
import { ReactComponent as FigureIcon } from "../../assets/svg/toy.svg";
import { ReactComponent as PineIcon } from "../../assets/svg/pine.svg";
import { ReactComponent as SnowIcon } from "../../assets/svg/snowflake.svg";
import "./SizeFilter.css";

type SizeFilterContainerProps = {
  toggleFilter: CallableFunction;
};

export function SizeFilter(props: SizeFilterContainerProps) {
  return (
    <div className="size-filter">
      <h3 className="size-filter__header">Размер</h3>
      <label className="size-filter__lbl">
        <input
          className="size-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("size", Size.L)}
        />
        <span className="size-filter__icon size-filter__icon-l" />
      </label>
      <label className="size-filter__lbl">
        <input
          className="size-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("size", Size.M)}
        />
        <span className="size-filter__icon size-filter__icon-m" />
      </label>
      <label className="size-filter__lbl">
        <input
          className="size-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("size", Size.S)}
        />
        <span className="size-filter__icon size-filter__icon-s" />
      </label>
    </div>
  );
}
