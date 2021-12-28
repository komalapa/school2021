import { Size } from "../../types/types";
import { ReactComponent as BallIcon } from "../../assets/svg/ball-2.svg";
import "./SizeFilter.css";
import { FC } from "react";
import { FilterCheckInput } from "../FilterCheckInput/FilterCheckInput";

type SizeFilterContainerProps = {
  toggleFilter: CallableFunction;
  checked: Size[];
};

export const SizeFilter: FC<SizeFilterContainerProps> = (props) => {
  const { toggleFilter, checked } = props;

  function handleFilter(filterName: string, filterValue: Size) {
    toggleFilter(filterName, filterValue);
  }

  return (
    <div className="size-filter">
      <h3 className="size-filter__header">Размер</h3>

      <FilterCheckInput
        className="size-filter"
        onToggleFilter={handleFilter}
        filterName="size"
        filterValue={Size.L}
        checked={checked.indexOf(Size.L) >= 0}
      >
        <BallIcon className="size-filter__icon size-filter__icon-l" />
      </FilterCheckInput>
      <FilterCheckInput
        className="size-filter"
        onToggleFilter={handleFilter}
        filterName="size"
        filterValue={Size.M}
        checked={checked.indexOf(Size.M) >= 0}
      >
        <BallIcon className="size-filter__icon size-filter__icon-m" />
      </FilterCheckInput>
      <FilterCheckInput
        className="size-filter"
        onToggleFilter={handleFilter}
        filterName="size"
        filterValue={Size.S}
        checked={checked.indexOf(Size.S) >= 0}
      >
        <BallIcon className="size-filter__icon size-filter__icon-s" />
      </FilterCheckInput>
    </div>
  );
};
