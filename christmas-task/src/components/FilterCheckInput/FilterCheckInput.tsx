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

  console.log(isChecked, filterValue, checked);

  if (isChecked !== checked) toggleChecked();

  function handleInput() {
    toggleChecked(isChecked);
    onToggleFilter(filterName, filterValue);
  }
  return (
    <label key={filterName + filterValue} className={`${className}__lbl`}>
      <input
        className={`${className}__check`}
        type="checkbox"
        onChange={handleInput}
        checked={isChecked}
      />
      {children}
    </label>
  );
};
