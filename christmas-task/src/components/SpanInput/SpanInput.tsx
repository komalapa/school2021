import { useState } from "react";
import "./SpanInput.css";

type SpanInputProps = {
  toggleFilter: CallableFunction;
  min: number;
  max: number;
  step: number;
};

export function SpanInput(props: SpanInputProps) {
  const [minValue, setMinValue] = useState(props.min);
  const [maxValue, setMaxValue] = useState(props.max);
  const [isSended, setIsSended] = useState(false); //for send span value only on next render

  function handleMinInput(e: React.FormEvent<HTMLInputElement>): void {
    const curValue: number = +e.currentTarget.value;
    if (curValue < maxValue) setMinValue(curValue);
    setIsSended(false);
  }

  function handleMaxInput(e: React.FormEvent<HTMLInputElement>): void {
    const curValue: number = +e.currentTarget.value;
    if (curValue > minValue) setMaxValue(curValue);
    setIsSended(false);
  }

  if (!isSended) {
    props.toggleFilter(minValue, maxValue);
    setIsSended(true);
  }
  return (
    <div className="span-input">
      <span className="span-input__text span-input__min-text">{minValue}</span>
      <input
        className="span-input__min"
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={minValue}
        onChange={handleMinInput}
      />
      <input
        className="span-input__max"
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={maxValue}
        onChange={handleMaxInput}
      />
      <span className="span-input__max-text span-input__text">{maxValue}</span>
    </div>
  );
}
