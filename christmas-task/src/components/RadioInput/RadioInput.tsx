import { FC } from "react";
import { Direction } from "../../types/types";

interface RadioInputProps {
  className: string;
  id: string;
  radioName: string;
  type: string;
  value: Direction;
  onChoose: CallableFunction;
  selected: boolean;
}

export const RadioInput: FC<RadioInputProps> = (props) => {
  const {
    className,
    id,
    type,
    value: direction,
    onChoose,
    children,
    radioName,
    selected,
  } = props;

  function handleSort(hType, hDirection) {
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
