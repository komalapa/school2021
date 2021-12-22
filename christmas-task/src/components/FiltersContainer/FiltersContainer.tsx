import { FC, useState } from "react";
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
import { Search } from "../Search/Search";
import { Footer } from "../Footer/Footer";
import { useToggle } from "../shared/hooks/useToggle";

type FiltersContainerProps = {
  toggleFilter: CallableFunction;
  toggleSpanFilter: CallableFunction;
  filters: Filters;
  spanFilters: SpanFilters;
  toggleOnlyFavorite: CallableFunction;
  favoritesCount: number;
  setupSort: CallableFunction;
  reset: CallableFunction;
  setupSearch: CallableFunction;
  searchLine: string;
};

export const FiltersContainter: FC<FiltersContainerProps> = (props) => {
  const {
    toggleFilter,
    toggleSpanFilter,
    filters,
    spanFilters,
    toggleOnlyFavorite,
    favoritesCount,
    setupSort,
    reset,
    setupSearch,
    searchLine,
  } = props;
  const curYear = new Date().getFullYear();
  const [isOnlyFavorite, setIsOnlyFavorite] = useToggle(false);

  function toggleFavorite() {
    setIsOnlyFavorite();
    toggleOnlyFavorite();
  }
  function handleReset() {
    reset();
  }
  function handleClear() {
    localStorage.clear();
  }

  return (
    <div className="filters-container">
      <Search setupSearch={setupSearch} searchLine={searchLine} />

      <ShapeFilter toggleFilter={toggleFilter} checked={filters.shape} />
      <SizeFilter toggleFilter={toggleFilter} checked={filters.size} />
      <ColorFilter toggleFilter={toggleFilter} checked={filters.color} />
      <YearFilter
        toggleFilter={toggleSpanFilter}
        min={1940}
        max={curYear + 1}
        step={1}
        values={spanFilters.year}
      />
      <CountFilter toggleFilter={toggleSpanFilter} min={1} max={20} step={1} />
      <button
        className={
          isOnlyFavorite
            ? "favorite-button favorite-button__on"
            : "favorite-button"
        }
        onClick={toggleFavorite}
      >
        {isOnlyFavorite ? <HeartIconFull /> : <HeartIcon />}
        <span className="favorite-button__text"> {favoritesCount}</span>
      </button>
      <SelectSort setupSort={setupSort} />
      <span className="filters__reset" onClick={handleReset}>
        Сбросить фильтры
      </span>
      <span className="filters__reset" onClick={handleClear}>
        Удалить сохраненные настройки
      </span>
      <Footer />
    </div>
  );
};
