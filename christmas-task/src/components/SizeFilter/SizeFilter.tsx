import { Size } from "../../types/types";
import { ReactComponent as BallIcon } from "../../assets/svg/ball-2.svg";
import "./SizeFilter.css";
import { useState } from "react";

type SizeFilterContainerProps = {
  toggleFilter: CallableFunction;
  checked: Size[];
};

export function SizeFilter(props: SizeFilterContainerProps) {
  const [isS, setIsS] = useState(props.checked.indexOf(Size.S) >= 0);
  const [isM, setIsM] = useState(props.checked.indexOf(Size.M) >= 0);
  const [isL, setIsL] = useState(props.checked.indexOf(Size.L) >= 0);
  return (
    <div className="size-filter">
      <h3 className="size-filter__header">Размер</h3>
      <label className="size-filter__lbl">
        <input
          className="size-filter__check"
          type="checkbox"
          onInput={() => {
            setIsL(!isL);
            props.toggleFilter("size", Size.L);
          }}
          checked={isL}
        />
        <BallIcon className="size-filter__icon size-filter__icon-l" />
      </label>
      <label className="size-filter__lbl">
        <input
          className="size-filter__check"
          type="checkbox"
          onInput={() => {
            setIsM(!isM);
            props.toggleFilter("size", Size.M);
          }}
          checked={isM}
        />
        <BallIcon className="size-filter__icon size-filter__icon-m" />
      </label>
      <label className="size-filter__lbl">
        <input
          className="size-filter__check"
          type="checkbox"
          onInput={() => {
            setIsS(!isS);
            props.toggleFilter("size", Size.S);
          }}
          checked={isS}
        />
        <BallIcon className="size-filter__icon size-filter__icon-s" />
      </label>
    </div>
  );
}
