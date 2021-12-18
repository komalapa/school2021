import { Colors } from "../../types/types";
import "./ColorFilter.css";

type ColorFilterContainerProps = {
  toggleFilter: CallableFunction;
  checked: Colors[];
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
          checked={props.checked.indexOf(Colors.Red) >= 0}
        />
        <span className="color-filter__icon color-filter__icon-red" />
      </label>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("color", Colors.White)}
          checked={props.checked.indexOf(Colors.White) >= 0}
        />
        <span className="color-filter__icon color-filter__icon-white" />
      </label>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("color", Colors.Yellow)}
          checked={props.checked.indexOf(Colors.Yellow) >= 0}
        />
        <span className="color-filter__icon color-filter__icon-yellow" />
      </label>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("color", Colors.Blue)}
          checked={props.checked.indexOf(Colors.Blue) >= 0}
        />
        <span className="color-filter__icon color-filter__icon-blue" />
      </label>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => props.toggleFilter("color", Colors.Green)}
          checked={props.checked.indexOf(Colors.Green) >= 0}
        />
        <span className="color-filter__icon color-filter__icon-green" />
      </label>
    </div>
  );
}
