import { FC, useState } from "react";
import { Toy } from "../../types/toys/toy";
import {
  Colors,
  Direction,
  Filters,
  Shapes,
  Size,
  Sort,
  SpanFilters,
} from "../../types/types";
import { data } from "../../data";
import { FiltersContainter } from "../FiltersContainer/FiltersContainer";
import { ToysContainter } from "../ToysContainer/ToysContainer";

import "./ToysApp.css";

interface ToysAppProps {
  favorites: Toy[];
  sendFavorites: CallableFunction;
}

const toys: Toy[] = data.map((item) => new Toy(item));

const yearsSet: number[] = [];
toys.map((toy) => yearsSet.push(toy.year));
const years: number[] = yearsSet.sort((a, b) => a - b);

const countsSet: Set<number> = new Set();
toys.map((toy) => countsSet.add(toy.count));
const counts: number[] = Array.from(countsSet).sort((a, b) => a - b);

const curYear = new Date().getFullYear();

const defaultFilters: Filters = {
  color: [Colors.Blue, Colors.Green, Colors.Red, Colors.White, Colors.Yellow],

  shape: [
    Shapes.Ball,
    Shapes.Bell,
    Shapes.Figure,
    Shapes.Pinecone,
    Shapes.Snowflake,
  ],
  size: [Size.L, Size.M, Size.S],
};

const defaultSpanFilters: SpanFilters = {
  year: {
    min: years[0],
    max: curYear + 1,
    minVal: years[0],
    maxVal: curYear + 1,
  },
  count: {
    min: counts[0],
    max: counts[counts.length - 1],
    minVal: counts[0],
    maxVal: counts[counts.length - 1],
  },
};

const initialFilters = () =>
  JSON.parse(localStorage.getItem("komalapaChristmasFilters")) || {
    ...defaultFilters,
  };

const initialSpanFilters = () =>
  JSON.parse(localStorage.getItem("komalapaChristmasSpanFilters")) || {
    ...defaultSpanFilters,
  };

const initialFavorites = () => {
  const favoritesString = localStorage.getItem("komalapaChristmasFavorites");
  let lsFavorites;
  if (favoritesString) lsFavorites = JSON.parse(favoritesString);
  if (lsFavorites) {
    lsFavorites = lsFavorites
      .filter((toy) => toy)
      .map((fav) => toys.find((toy: Toy) => fav.id === toy.id));
    lsFavorites.forEach((toy: Toy) => {
      toy.isFavorite = true;
    });
    return lsFavorites;
  }
  return toys.filter((toy: Toy) => toy.isFavorite);
};

export const ToysApp: FC<ToysAppProps> = (props) => {
  const { sendFavorites } = props;
  const [curToysList, setCurToysList] = useState<Toy[]>(toys);
  const [filters, setFilters] = useState<Filters>(initialFilters());
  const [spanFilters, setSpanFilters] = useState<SpanFilters>(
    initialSpanFilters()
  );
  const [favorites, setFavorites] = useState<Toy[]>(initialFavorites);
  const [sort, setSort] = useState<Sort>({
    type: "name",
    direction: Direction.Up,
  });
  const [searchStr, setSearchStr] = useState<string>("");
  const [isOnlyFavorites, setIsOnlyFavorites] = useState<boolean>(false);
  const [isFiltred, setIsFiltered] = useState<boolean>(false);
  // filter
  function filterToys() {
    setCurToysList([]);
    function filterToy(filter: string, toy: Toy) {
      if (filters[filter].indexOf(toy[filter]) >= 0) return true;
      return false;
    }
    function spanFilterToy(toy: Toy, filter: string): Boolean {
      if (
        spanFilters[filter].minVal <= toy[filter] &&
        spanFilters[filter].maxVal >= toy[filter]
      )
        return true;

      return false;
    }
    let array = toys;
    for (let filter in spanFilters) {
      array = array.filter((toy) => spanFilterToy(toy, filter));
    }

    for (let filter in filters) {
      array = array.filter((toy) => filterToy(filter, toy));
    }

    if (isOnlyFavorites) {
      array = array.filter((toy) => toy.isFavorite);
    }

    if (searchStr !== "")
      array = array.filter(
        (toy) => toy.name.toLowerCase().indexOf(searchStr.toLowerCase()) >= 0
      );

    if (sort.type === "name") {
      if (sort.direction === Direction.Up) {
        setCurToysList(array.sort((t1, t2) => t1.name.localeCompare(t2.name)));
      } else {
        setCurToysList(array.sort((t1, t2) => t2.name.localeCompare(t1.name)));
      }
    }

    if (sort.type === "year") {
      if (sort.direction === Direction.Up) {
        setCurToysList(array.sort((t1, t2) => t1.year - t2.year));
      } else {
        setCurToysList(array.sort((t1, t2) => t2.year - t1.year));
      }
    }
    setIsFiltered(true);
  }
  //Handlers
  function toggleFilter(type, value) {
    const index = filters[type].indexOf(value);
    if (index >= 0) {
      let curFilters = { ...filters };
      curFilters[type].splice(index, 1);
      setFilters(curFilters);
      setIsFiltered(false);
    } else {
      setFilters({ ...filters, [type]: [...filters[type], value] });
      setIsFiltered(false);
    }
    setIsFiltered(false);
  }

  function toggleSpanFilter(type, min, max) {
    setSpanFilters({
      ...spanFilters,
      [type]: { ...spanFilters[type], minVal: min, maxVal: max },
    });
    setIsFiltered(false);
  }

  function toggleFavorite(toy: Toy): void {
    const index = favorites.indexOf(toy);

    if (index >= 0) {
      setFavorites([
        ...favorites.slice(0, index),
        ...favorites.slice(index + 1),
      ]);
      toy.isFavorite = false;
    } else {
      setFavorites([...favorites, toy]);
      toy.isFavorite = true;
    }

    if (isOnlyFavorites) filterToys();
  }

  function handleSort(type: string, direction: Direction) {
    setSort({ type, direction });
    setIsFiltered(false);
  }

  function handleResetFilters() {
    //TODO fix reset. Works only once
    setFilters({ ...defaultFilters });
    setIsFiltered(false);
    setSpanFilters({ ...defaultSpanFilters });
    setIsFiltered(false);
  }
  console.log("app", spanFilters);
  function handleSearch(searchString: string) {
    setSearchStr(searchString);
    setIsFiltered(false);
  }

  function handleFavoritesFilter() {
    setIsOnlyFavorites(!isOnlyFavorites);
    setIsFiltered(false);
  }

  function handleLS() {
    localStorage.setItem(
      "komalapaChristmasFavorites",
      JSON.stringify(favorites)
    );
    localStorage.setItem(
      "komalapaChristmasSpanFilters",
      JSON.stringify(spanFilters)
    );
    localStorage.setItem("komalapaChristmasFilters", JSON.stringify(filters));
  }
  if (!isFiltred) filterToys();
  handleLS();
  sendFavorites(favorites);
  //render
  return (
    <div className="toys-app">
      <FiltersContainter
        toggleFilter={toggleFilter}
        toggleSpanFilter={toggleSpanFilter}
        filters={filters}
        spanFilters={spanFilters}
        toggleOnlyFavorite={handleFavoritesFilter}
        favoritesCount={favorites.length}
        setupSort={handleSort}
        reset={handleResetFilters}
        setupSearch={handleSearch}
        searchLine={searchStr}
      />
      <ToysContainter
        toys={curToysList}
        toggleFavorite={toggleFavorite}
        favoritesCount={favorites.length}
      />
    </div>
  );
};
