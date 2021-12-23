import { FC, useEffect, useState } from "react";

import "./SpanInput.css";

type SpanInputProps = {
  toggleFilter: CallableFunction;
  min: number;
  max: number;
  step: number;
  maxVal?: number;
  minVal?: number;
};

export const SpanInput: FC<SpanInputProps> = (props) => {
  const { toggleFilter, min, max, step, maxVal, minVal } = props;
  const [minValue, setMinValue] = useState(minVal || min);
  const [maxValue, setMaxValue] = useState(maxVal || max);
  const [isSended, setIsSended] = useState(false); //for send span value only on next render
  const [reGradient, setReGradient] = useState(true); // for re calculate Gradient after state changes
  const [gradientValue, setGradientValue] = useState<string>(
    "to right, white, white 0%, goldenrod 0%, goldenrod 100%, white 100%, white 100%"
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
    toggleFilter(minValue, maxValue);
    setIsSended(true);
    gradient();
  }
  function gradient() {
    let inputStep = (step * 100) / (max - min);
    let start = ((minValue - min) / step) * inputStep;
    let end = ((maxValue - min) / step) * inputStep;
    setGradientValue(
      `to right, white, white ${start}%, goldenrod ${start}%, goldenrod ${end}%, white ${end}%, white 100%`
    );
  }

  if (minVal !== minValue && min !== minValue) {
    setMinValue(minVal || min);
    setReGradient(true);
  }
  if (maxVal !== maxValue && max !== maxValue) {
    setMaxValue(maxVal || max);
    setReGradient(true);
  }
  if (reGradient) {
    gradient();
    setReGradient(false);
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
        min={min}
        max={max}
        step={step}
        value={minValue}
        onChange={handleMinInput}
      />
      <input
        className="span-input__max"
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxValue}
        onChange={handleMaxInput}
      />
      <span className="span-input__max-text span-input__text">{maxValue}</span>
    </div>
  );
};
