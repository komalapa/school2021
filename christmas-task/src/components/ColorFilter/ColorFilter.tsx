import React, { FC } from "react";
import type { ColorFilterContainerProps } from "../../types/props";
import { Colors } from "../../types/types";
import { FilterCheckInput } from "../FilterCheckInput/FilterCheckInput";
import "./ColorFilter.css";

export const ColorFilter: FC<ColorFilterContainerProps> = (props) => {
  const { toggleFilter, checked, header } = props;

  const handleFilter = (filterName: string, filterValue: Colors) => {
    toggleFilter(filterName, filterValue);
  };

  return (
    <div className="color-filter">
      <h3 className="color-filter__header">{header || "Цвет"}</h3>
      <FilterCheckInput
        className="color-filter"
        onToggleFilter={handleFilter}
        filterName="color"
        filterValue={Colors.Red}
        checked={checked.indexOf(Colors.Red) >= 0}
      >
        <span className="color-filter__icon color-filter__icon-red" />
      </FilterCheckInput>

      <FilterCheckInput
        className="color-filter"
        onToggleFilter={handleFilter}
        filterName="color"
        filterValue={Colors.White}
        checked={checked.indexOf(Colors.White) >= 0}
      >
        <span className="color-filter__icon color-filter__icon-white" />
      </FilterCheckInput>
      <FilterCheckInput
        className="color-filter"
        onToggleFilter={handleFilter}
        filterName="color"
        filterValue={Colors.Yellow}
        checked={checked.indexOf(Colors.Yellow) >= 0}
      >
        <span className="color-filter__icon color-filter__icon-yellow" />
      </FilterCheckInput>
      <FilterCheckInput
        className="color-filter"
        onToggleFilter={handleFilter}
        filterName="color"
        filterValue={Colors.Blue}
        checked={checked.indexOf(Colors.Blue) >= 0}
      >
        <span className="color-filter__icon color-filter__icon-blue" />
      </FilterCheckInput>
      <FilterCheckInput
        className="color-filter"
        onToggleFilter={handleFilter}
        filterName="color"
        filterValue={Colors.Green}
        checked={checked.indexOf(Colors.Green) >= 0}
      >
        <span className="color-filter__icon color-filter__icon-green" />
      </FilterCheckInput>
    </div>
  );
};
