import { FC } from "react";
import { Direction } from "../../types/types";

interface SortRadioInputProps {
  className: string;
  id: string;
  radioName: string;
  type: string;
  direction: Direction;
  onSort: CallableFunction;
}

export const SortRadioInput: FC<SortRadioInputProps> = (props) => {
  const { className, id, type, direction, onSort, children, radioName } = props;

  function handleSort(hType, hDirection) {
    onSort(hType, hDirection);
  }

  // Can't use name for input name={name}
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={radioName}
        className={className}
        onClick={() => handleSort(type, direction)}
        defaultChecked
      />
      <label className="sort__label" defaultChecked htmlFor={id}>
        {children}
      </label>
    </div>
  );
};
