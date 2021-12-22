import { useState } from "react";
import { Colors } from "../../types/types";
import { FilterCheckInput } from "../FilterCheckInput/FilterCheckInput";
import "./ColorFilter.css";

type ColorFilterContainerProps = {
  toggleFilter: CallableFunction;
  checked: Colors[];
};

export function ColorFilter(props: ColorFilterContainerProps) {
  const [isRed, setIsRed] = useState(props.checked.indexOf(Colors.Red) >= 0);
  const [isWhite, setIsWhite] = useState(
    props.checked.indexOf(Colors.White) >= 0
  );
  const [isBlue, setIsBlue] = useState(props.checked.indexOf(Colors.Blue) >= 0);
  const [isYellow, setIsYellow] = useState(
    props.checked.indexOf(Colors.Yellow) >= 0
  );
  const [isGreen, setIsGreen] = useState(
    props.checked.indexOf(Colors.Green) >= 0
  );

  const handleFilter = (filterName, filterValue) => {
    // setIsRed(!isRed);
    props.toggleFilter(filterName, filterValue);
  };

  return (
    <div className="color-filter">
      <h3 className="color-filter__header">Цвет</h3>
      <FilterCheckInput
        className="color-filter"
        onToggleFilter={handleFilter}
        filterName="color"
        filterValue={Colors.Red}
        checked={props.checked.indexOf(Colors.Red) >= 0}
      >
        <span className="color-filter__icon color-filter__icon-red" />
      </FilterCheckInput>

      <FilterCheckInput
        className="color-filter"
        onToggleFilter={handleFilter}
        filterName="color"
        filterValue={Colors.White}
        checked={props.checked.indexOf(Colors.White) >= 0}
      >
        <span className="color-filter__icon color-filter__icon-white" />
      </FilterCheckInput>
      <FilterCheckInput
        className="color-filter"
        onToggleFilter={handleFilter}
        filterName="color"
        filterValue={Colors.Yellow}
        checked={props.checked.indexOf(Colors.Yellow) >= 0}
      >
        <span className="color-filter__icon color-filter__icon-yellow" />
      </FilterCheckInput>
      <FilterCheckInput
        className="color-filter"
        onToggleFilter={handleFilter}
        filterName="color"
        filterValue={Colors.Blue}
        checked={props.checked.indexOf(Colors.Blue) >= 0}
      >
        <span className="color-filter__icon color-filter__icon-blue" />
      </FilterCheckInput>
      <FilterCheckInput
        className="color-filter"
        onToggleFilter={handleFilter}
        filterName="color"
        filterValue={Colors.Green}
        checked={props.checked.indexOf(Colors.Green) >= 0}
      >
        <span className="color-filter__icon color-filter__icon-green" />
      </FilterCheckInput>
    </div>
  );
}
