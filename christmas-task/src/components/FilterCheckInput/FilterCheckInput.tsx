import { FC } from "react";
import { Colors, Shapes, Size } from "../../types/types";
import { useToggle } from "../shared/hooks/useToggle";

interface FilterCheckInputProps {
  className: string;
  onToggleFilter: CallableFunction;
  checked: boolean;
  filterName: string;
  filterValue: Colors | Shapes | Size;
}

export const FilterCheckInput: FC<FilterCheckInputProps> = (props) => {
  const {
    className,
    onToggleFilter,
    checked,
    filterName,
    filterValue,
    children,
  } = props;

  const [isChecked, toggleChecked] = useToggle(checked);

  function handleInput() {
    toggleChecked(isChecked);
    onToggleFilter(filterName, filterValue);
  }
  return (
    <label className={`${className}__lbl`}>
      <input
        className={`${className}__check`}
        type="checkbox"
        onInput={handleInput}
        defaultChecked={isChecked}
      />
      {children}
    </label>
  );
};
