import { useState } from "react";
import { Filters, SpanFilters } from "../../types/types";
import { ColorFilter } from "../ColorFilter/ColorFilter";
import { CountFilter } from "../CountFilter/CountFilter";
import { ShapeFilter } from "../ShapeFilter/ShapeFilter";
import { SizeFilter } from "../SizeFilter/SizeFilter";
import { YearFilter } from "../YearFilter/YearFilter";

import { ReactComponent as HeartIcon } from "../../assets/svg/heart.svg";
import { ReactComponent as HeartIconFull } from "../../assets/svg/heart-full.svg";
import "./FiltersContainer.css";
import { SelectSort } from "../SelectSort/SelectSort";

type FiltersContainerProps = {
  toggleFilter: CallableFunction;
  toggleSpanFilter: CallableFunction;
  filters: Filters;
  spanFilters: SpanFilters;
  toggleOnlyFavorite: CallableFunction;
  favoritesCount: number;
  setupSort: CallableFunction;
};

export function FiltersContainter(props: FiltersContainerProps) {
  const curYear = new Date().getFullYear();
  const [isOnlyFavorite, setIsOnlyFavorite] = useState(false);

  function toggleFavorite() {
    setIsOnlyFavorite(!isOnlyFavorite);
    props.toggleOnlyFavorite();
  }
  return (
    <div className="filters-container">
      <ShapeFilter
        toggleFilter={props.toggleFilter}
        checked={props.filters.shape}
      />
      <SizeFilter
        toggleFilter={props.toggleFilter}
        checked={props.filters.size}
      />
      <ColorFilter
        toggleFilter={props.toggleFilter}
        checked={props.filters.color}
      />
      <YearFilter
        toggleFilter={props.toggleSpanFilter}
        min={1940}
        max={curYear + 1}
        step={1}
        values={props.spanFilters.year}
      />
      <CountFilter
        toggleFilter={props.toggleSpanFilter}
        min={1}
        max={20}
        step={1}
      />
      <button
        className={
          isOnlyFavorite
            ? "favorite-button favorite-button__on"
            : "favorite-button"
        }
        onClick={toggleFavorite}
      >
        {isOnlyFavorite ? <HeartIconFull /> : <HeartIcon />}
        <span className="favorite-button__text"> {props.favoritesCount}</span>
      </button>
      <SelectSort setupSort={props.setupSort} />
    </div>
  );
}
