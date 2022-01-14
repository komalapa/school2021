import React, { FC } from "react";
import type { FilterCheckInputProps } from "../../types/props";
import { useToggle } from "../shared/hooks/useToggle";

export const FilterCheckInput: FC<FilterCheckInputProps> = (props) => {
  const {
    className,
    onToggleFilter,
    checked,
    filterName,
    filterValue,
    children
  } = props;

  const [isChecked, toggleChecked] = useToggle(checked);

  if (isChecked !== checked) toggleChecked();

  function handleInput() {
    toggleChecked();
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
