import "./App.css";
import { Toy } from "./types/toys/toy";
import { data } from "./data";
import { ToysContainter } from "./components/ToysContainer/ToysContainer";
import { useState } from "react";
import { Colors, Direction, Filters, Shapes, Size } from "./types/types";
import { FiltersContainter } from "./components/FiltersContainer/FiltersContainer";

const toys: Array<Toy> = data.map((item) => new Toy(item));

const yearsSet: Set<number> = new Set();
toys.map((toy) => yearsSet.add(toy.year));
const years: number[] = Array.from(yearsSet).filter((a, b) => a > b);

const countsSet: Set<number> = new Set();
toys.map((toy) => countsSet.add(toy.count));
const counts: number[] = Array.from(countsSet).filter((a, b) => a > b);

// console.log(years);

const curYear = new Date().getFullYear();
const filters: Filters = {
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
const spanFilters = {
  year: { min: years[0], max: curYear + 1 },
  count: { max: counts[0], min: counts[counts.length - 1] },
};

function App() {
  const [curToysList, setCurToysList] = useState(toys);

  const [sort, setSort] = useState({ type: "name", direction: Direction.Up });
  const [isFiltred, setIsFiltred] = useState(false);
  const [favorites, setFavorites] = useState(
    toys.filter((toy: Toy) => toy.isFavorite)
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
      ) {
        // console.log("span", toy, spanFilters[filter]);
        return true;
      }
      // }
      return false;
    }
    let array = toys;
    for (let filter in spanFilters) {
      array = array.filter((toy) => spanFilterToy(toy, filter));
    }
    // array = array.filter(spanFilterToy);
    for (let filter in filters) {
      array = array.filter((toy) => filterToy(filter, toy));
    }
    setCurToysList(array);

    setIsFiltred(true);
  }
  //=======================================================END-FilterToys
  function toggleFilter(type, value) {
    const index = filters[type].indexOf(value);
    // console.log(index, filters[type], value);
    if (index >= 0) {
      filters[type].splice(index, index + 1);
      // console.log("??", filters);
    } else {
      // console.log("!!", filters);
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

  function toggleFavorite(toy: Toy): boolean {
    const index = favorites.indexOf(toy);
    // console.log(index, filters[type], value);
    if (index >= 0) {
      setFavorites([...favorites.slice(0, index), ...favorites.slice(index)]);
      // console.log("??", filters);
      return false;
    } else {
      if (favorites.length < 20) {
        // console.log("!!", filters);
        // favorites.push(toy);
        setFavorites([...favorites, toy]);
        return true;
      } else {
        alert("Слишком много любимчиков!");
        console.log(favorites);
        return false;
      }
    }
  }

  return (
    <div className="App">
      <FiltersContainter
        toggleFilter={toggleFilter}
        toggleSpanFilter={toggleSpanFilter}
        filters={filters}
        spanFilters={spanFilters}
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
