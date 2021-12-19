import { useState } from "react";
import "./SpanInput.css";

type SpanInputProps = {
  toggleFilter: CallableFunction;
  min: number;
  max: number;
  step: number;
  maxVal?: number;
  minVal?: number;
};

export function SpanInput(props: SpanInputProps) {
  const [minValue, setMinValue] = useState(props.minVal || props.min);
  const [maxValue, setMaxValue] = useState(props.maxVal || props.max);
  const [isSended, setIsSended] = useState(false); //for send span value only on next render

  const [gradientValue, setGradientValue] = useState<string>(
    "to right, white, white 0%, gold 0%, gold 100%, white 100%, white 100%"
  );
  function handleMinInput(e: React.FormEvent<HTMLInputElement>): void {
    const curValue: number = +e.currentTarget.value;
    if (curValue <= maxValue) setMinValue(curValue);
    setIsSended(false);
  }

  function handleMaxInput(e: React.FormEvent<HTMLInputElement>): void {
    const curValue: number = +e.currentTarget.value;
    if (curValue >= minValue) setMaxValue(curValue);
    setIsSended(false);
  }

  if (!isSended) {
    props.toggleFilter(minValue, maxValue);
    setIsSended(true);
    gradient();
  }

  function gradient() {
    let step = (props.step * 100) / (props.max - props.min);
    let start = ((minValue - props.min) / props.step) * step;
    let end = ((maxValue - props.min) / props.step) * step;
    setGradientValue(
      `to right, white, white ${start}%, gold ${start}%, gold ${end}%, white ${end}%, white 100%`
    );
    console.log(start, end, step);
  }

  return (
    <div className="span-input">
      <span
        className="span-input__track"
        style={{ backgroundImage: `linear-gradient(${gradientValue})` }}
      ></span>

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
