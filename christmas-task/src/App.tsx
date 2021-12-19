import "./App.css";
import { Toy } from "./types/toys/toy";
import { data } from "./data";
import { ToysContainter } from "./components/ToysContainer/ToysContainer";
import { useState } from "react";
import { Colors, Direction, Filters, Shapes, Size } from "./types/types";
import { FiltersContainter } from "./components/FiltersContainer/FiltersContainer";
import { type } from "os";

const toys: Array<Toy> = data.map((item) => new Toy(item));

const yearsSet: Array<number> = [];
toys.map((toy) => yearsSet.push(toy.year));
const years: number[] = yearsSet.sort((a, b) => a - b);

const countsSet: Set<number> = new Set();
toys.map((toy) => countsSet.add(toy.count));
const counts: number[] = Array.from(countsSet).sort((a, b) => a - b);

const curYear = new Date().getFullYear();
const filters: Filters = JSON.parse(
  localStorage.getItem("komalapaChristmasFilters")
) || {
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
const spanFilters = JSON.parse(
  localStorage.getItem("komalapaChristmasSpanFilters")
) || {
  year: { min: years[0], max: curYear + 1 },
  count: { min: counts[0], max: counts[counts.length - 1] },
};

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
}
// console.log(lsFavorites);

let isOnlyFavorites = false;

function App() {
  const [curToysList, setCurToysList] = useState(toys);
  const [sort, setSort] = useState({ type: "name", direction: Direction.Up });
  const [isFiltred, setIsFiltred] = useState(false);
  const [favorites, setFavorites] = useState(
    lsFavorites || toys.filter((toy: Toy) => toy.isFavorite)
  );

  //=======================================================FilterToys
  function filterToys() {
    setCurToysList([]);
    function filterToy(filter: string, toy: Toy) {
      if (filters[filter].indexOf(toy[filter]) >= 0) return true;
      return false;
    }
    function spanFilterToy(toy: Toy, filter: string): Boolean {
      // for (let filter in spanFilters) {
      if (
        spanFilters[filter].min <= toy[filter] &&
        spanFilters[filter].max >= toy[filter]
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
      console.log("only favs", favorites);
      array = array.filter((toy) => toy.isFavorite);
    }

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
    setIsFiltred(true);
  }
  //=======================================================END-FilterToys

  function toggleFilter(type, value) {
    const index = filters[type].indexOf(value);
    if (index >= 0) {
      filters[type].splice(index, index + 1);
    } else {
      filters[type].push(value);
    }
    setIsFiltred(false);
    filterToys();
  }

  function toggleSpanFilter(type, min, max) {
    spanFilters[type].min = min;
    spanFilters[type].max = max;
    setIsFiltred(false);
    filterToys();
  }
  if (!isFiltred) filterToys();

  function toggleFavorite(toy: Toy): void {
    const index = favorites.indexOf(toy);
    console.log("FAV", index);
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

  localStorage.setItem("komalapaChristmasFavorites", JSON.stringify(favorites));
  localStorage.setItem(
    "komalapaChristmasSpanFilters",
    JSON.stringify(spanFilters)
  );
  localStorage.setItem("komalapaChristmasFilters", JSON.stringify(filters));

  function toggleFavoritesFilter() {
    isOnlyFavorites = !isOnlyFavorites;
    filterToys();
  }

  function setupSort(type: string, direction: Direction) {
    setSort({ type, direction });
    // filterToys();
    setIsFiltred(false);
  }

  // setSort({ type: "name", direction: Direction.Up });

  function resetFilters() {
    filters.color = [
      Colors.Blue,
      Colors.Green,
      Colors.Red,
      Colors.White,
      Colors.Yellow,
    ];

    filters.shape = [
      Shapes.Ball,
      Shapes.Bell,
      Shapes.Figure,
      Shapes.Pinecone,
      Shapes.Snowflake,
    ];
    filters.size = [Size.L, Size.M, Size.S];

    spanFilters.year = { min: years[0], max: curYear + 1 };
    spanFilters.count = { min: counts[0], max: counts[counts.length - 1] };
    filterToys();
  }

  return (
    <div className="App">
      <FiltersContainter
        toggleFilter={toggleFilter}
        toggleSpanFilter={toggleSpanFilter}
        filters={filters}
        spanFilters={spanFilters}
        toggleOnlyFavorite={toggleFavoritesFilter}
        favoritesCount={favorites.length}
        setupSort={setupSort}
        reset={resetFilters}
      />
      <ToysContainter
        toys={curToysList}
        toggleFavorite={toggleFavorite}
        favoritesCount={favorites.length}
      />
    </div>
  );
}

export default App;
