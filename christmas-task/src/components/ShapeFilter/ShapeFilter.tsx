import { Shapes } from "../../types/types";
import { ReactComponent as BallIcon } from "../../assets/svg/ball1.svg";
import { ReactComponent as BellIcon } from "../../assets/svg/bell.svg";
import { ReactComponent as FigureIcon } from "../../assets/svg/toy.svg";
import { ReactComponent as PineIcon } from "../../assets/svg/pine.svg";
import { ReactComponent as SnowIcon } from "../../assets/svg/snowflake.svg";

import { FC } from "react";

import "./ShapeFilter.css";
import { FilterCheckInput } from "../FilterCheckInput/FilterCheckInput";

type ShapeFilterContainerProps = {
  toggleFilter: CallableFunction;
  checked: Shapes[];
};

export const ShapeFilter: FC<ShapeFilterContainerProps> = (props) => {
  const { toggleFilter, checked } = props;
  function handleFilter(filterName: string, filterValue: Shapes) {
    toggleFilter(filterName, filterValue);
  }
  return (
    <div className="shape-filter">
      <h3 className="shape-filter__header">Формы</h3>
      <FilterCheckInput
        className="shape-filter"
        onToggleFilter={handleFilter}
        filterName="shape"
        filterValue={Shapes.Ball}
        checked={checked.indexOf(Shapes.Ball) >= 0}
      >
        <BallIcon className="shape-filter__icon" />
      </FilterCheckInput>
      <FilterCheckInput
        className="shape-filter"
        onToggleFilter={handleFilter}
        filterName="shape"
        filterValue={Shapes.Bell}
        checked={checked.indexOf(Shapes.Bell) >= 0}
      >
        <BellIcon className="shape-filter__icon" />
      </FilterCheckInput>

      <FilterCheckInput
        className="shape-filter"
        onToggleFilter={handleFilter}
        filterName="shape"
        filterValue={Shapes.Figure}
        checked={checked.indexOf(Shapes.Figure) >= 0}
      >
        <FigureIcon className="shape-filter__icon" />
      </FilterCheckInput>

      <FilterCheckInput
        className="shape-filter"
        onToggleFilter={handleFilter}
        filterName="shape"
        filterValue={Shapes.Pinecone}
        checked={checked.indexOf(Shapes.Pinecone) >= 0}
      >
        <PineIcon className="shape-filter__icon" />
      </FilterCheckInput>

      <FilterCheckInput
        className="shape-filter"
        onToggleFilter={handleFilter}
        filterName="shape"
        filterValue={Shapes.Snowflake}
        checked={checked.indexOf(Shapes.Snowflake) >= 0}
      >
        <SnowIcon className="shape-filter__icon" />
      </FilterCheckInput>
    </div>
  );
};
