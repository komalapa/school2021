import { useState } from "react";
import { Colors } from "../../types/types";
import "./ColorFilter.css";

type ColorFilterContainerProps = {
  toggleFilter: CallableFunction;
  checked: Colors[];
};

export function ColorFilter(props: ColorFilterContainerProps) {
  const [isRed, setIsRed] = useState(props.checked.indexOf(Colors.Red) >= 0);
  const [isWhite, setIsWhite] = useState(
    props.checked.indexOf(Colors.White) >= 0
  );
  const [isBlue, setIsBlue] = useState(props.checked.indexOf(Colors.Blue) >= 0);
  const [isYellow, setIsYellow] = useState(
    props.checked.indexOf(Colors.Yellow) >= 0
  );
  const [isGreen, setIsGreen] = useState(
    props.checked.indexOf(Colors.Green) >= 0
  );
  console.log("red", isRed);
  return (
    <div className="color-filter">
      <h3 className="color-filter__header">Цвет</h3>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => {
            setIsRed(!isRed);
            props.toggleFilter("color", Colors.Red);
          }}
          checked={!isRed}
        />
        <span className="color-filter__icon color-filter__icon-red" />
      </label>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => {
            setIsWhite(!isWhite);
            props.toggleFilter("color", Colors.White);
          }}
          checked={!isWhite}
        />
        <span className="color-filter__icon color-filter__icon-white" />
      </label>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => {
            setIsYellow(!isYellow);
            props.toggleFilter("color", Colors.Yellow);
          }}
          checked={!isYellow}
        />
        <span className="color-filter__icon color-filter__icon-yellow" />
      </label>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => {
            setIsBlue(!isBlue);
            props.toggleFilter("color", Colors.Blue);
          }}
          checked={!isBlue}
        />
        <span className="color-filter__icon color-filter__icon-blue" />
      </label>
      <label className="color-filter__lbl">
        <input
          className="color-filter__check"
          type="checkbox"
          onInput={() => {
            setIsGreen(!isGreen);
            props.toggleFilter("color", Colors.Green);
          }}
          checked={!isGreen}
        />
        <span className="color-filter__icon color-filter__icon-green" />
      </label>
    </div>
  );
}
