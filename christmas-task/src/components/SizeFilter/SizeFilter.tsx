import { Size } from "../../types/types";
import { ReactComponent as BallIcon } from "../../assets/svg/ball-2.svg";
import "./SizeFilter.css";

type SizeFilterContainerProps = {
  toggleFilter: CallableFunction;
  checked: Size[];
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
          // checked={props.checked.indexOf(Size.L) >= 0}
        />
        <BallIcon className="size-filter__icon size-filter__icon-l" />
      </label>
      <label className="size-filter__lbl">
        <input
          className="size-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("size", Size.M)}
          // checked={props.checked.indexOf(Size.M) >= 0}
        />
        <BallIcon className="size-filter__icon size-filter__icon-m" />
      </label>
      <label className="size-filter__lbl">
        <input
          className="size-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("size", Size.S)}
          // checked={props.checked.indexOf(Size.S) >= 0}
        />
        <BallIcon className="size-filter__icon size-filter__icon-s" />
      </label>
    </div>
  );
}
