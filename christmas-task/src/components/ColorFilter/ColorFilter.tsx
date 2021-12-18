import { Colors } from "../../types/types";
import "./ColorFilter.css";

type ColorFilterContainerProps = {
  toggleFilter: CallableFunction;
};

export function ColorFilter(props: ColorFilterContainerProps) {
  return (
    <div className="color-filter">
      <h3 className="color-filter__header">Цвет</h3>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("color", Colors.Red)}
        />
        <span className="color-filter__icon color-filter__icon-red" />
      </label>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("color", Colors.White)}
        />
        <span className="color-filter__icon color-filter__icon-white" />
      </label>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("color", Colors.Yellow)}
        />
        <span className="color-filter__icon color-filter__icon-yellow" />
      </label>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("color", Colors.Blue)}
        />
        <span className="color-filter__icon color-filter__icon-blue" />
      </label>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("color", Colors.Green)}
        />
        <span className="color-filter__icon color-filter__icon-green" />
      </label>
    </div>
  );
}
