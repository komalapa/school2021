import React, { FC } from "react";
import type { RadioInputProps } from "../../types/props";
import { Direction } from "../../types/types";

export const RadioInput: FC<RadioInputProps> = (props) => {
  const {
    className,
    id,
    type,
    value: direction,
    onChoose,
    children,
    radioName,
    selected
  } = props;

  function handleSort(hType: string, hDirection: Direction) {
    onChoose(hType, hDirection);
  }

  return (
    <div>
      <input
        type="radio"
        id={id}
        name={radioName}
        className={`${className}__radio`}
        onClick={() => handleSort(type, direction)}
        defaultChecked={selected}
      />
      <label className={`${className}__label`} defaultChecked htmlFor={id}>
        {children}
      </label>
    </div>
  );
};
