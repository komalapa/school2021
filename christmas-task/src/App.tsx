import "./App.css";
import { Toy } from "./types/toys/toy";
import { data } from "./data";
import { ToysContainter } from "./components/ToysContainer/ToysContainer";
import { useState } from "react";
import { Colors, Direction, Filters, Shapes, Size } from "./types/types";
import { FiltersContainter } from "./components/FiltersContainer/FiltersContainer";

const toys: Array<Toy> = data.map((item) => new Toy(item));

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
  year: { min: -1, max: 2200 },
  count: { max: -1, min: 100 },
};

function App() {
  const [curToysList, setCurToysList] = useState(toys);

  const [sort, setSort] = useState({ type: "name", direction: Direction.Up });
  const [isFiltred, setIsFiltred] = useState(false);

  //=======================================================FilterToys
  function filterToys() {
    setCurToysList([]);
    function filterToy(filter: string, toy: Toy) {
      if (filters[filter].indexOf(toy[filter]) >= 0) return true;
      return false;
    }
    function spanFilterToy(toy: Toy): Boolean {
      for (let filter in spanFilters) {
        if (
          spanFilters[filter].min <= toy[filter] &&
          spanFilters[filter].max >= toy[filter]
        ) {
          return true;
        }
      }
      return false;
    }
    let array = toys;
    array = array.filter(spanFilterToy);
    for (let filter in filters) {
      array = array.filter((toy) => filterToy(filter, toy));
    }
    setCurToysList(array);

    setIsFiltred(true);
  }
  //=======================================================END-FilterToys
  function toggleFilter(type, value) {
    const index = filters[type].indexOf(value);
    console.log(index, filters[type], value);
    if (index >= 0) {
      filters[type].splice(index, index + 1);
      console.log("??", filters);
    } else {
      console.log("!!", filters);
      filters[type].push(value);
    }
    setIsFiltred(false);
    filterToys();
  }

  function toggleSpanFilter(type, min, max) {
    spanFilters[type].min = min;
    spanFilters[type].max = max;
    setIsFiltred(false);
  }
  if (!isFiltred) filterToys();

  return (
    <div className="App">
      <FiltersContainter
        toggleFilter={toggleFilter}
        toggleSpanFilter={toggleSpanFilter}
        filters={filters}
        spanFilters={spanFilters}
      />
      <ToysContainter toys={curToysList} />
    </div>
  );
}

export default App;
