// import React from 'react';
// import logo from './logo.svg';
import "./App.css";
// import { Hello } from './components/hello'
import { Toy } from "./types/toys/toy";
import { data } from "./data";
import { ToyCard } from "./components/ToyCard/ToyCard";
import { ToysContainter } from "./components/ToysContainer/ToysContainer";
import { SpanInput } from "./components/SpanInput/SpanInput";
import { useState } from "react";
import { Colors, Direction, Filters, Shapes, Size } from "./types/types";
import { FiltersContainter } from "./components/FiltersContainer/FiltersContainer";
import { render } from "@testing-library/react";
// enum Direction {
//   Up,
//   Down,
// }
// interface spanObject {
//   min: number;
//   max: number;
// }

// interface Filter {
//   type: "color" | "shape" | "size";
//   values: Colors[] | Shapes[] | Size[];
// }
// interface FilterSpan {
//   type: "year" | "count";
//   values: spanObject;
// }

// function isSpanObject(object: any): object is spanObject {
//   return "min" in object;
// }
// interface Sort {
//   type: "name" | "year" | "number";
//   direction: Direction;
// }

const toys: Array<Toy> = data.map((item) => new Toy(item));

const filters: Filters = {
  color: [
    Colors.Blue,
    Colors.Green,
    Colors.Red,
    Colors.White,
    Colors.White,
    Colors.Yellow,
  ],
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
    // console.log(filters);
    const tmpToysList: Set<Toy> = new Set();
    // const tmpArr = toys;
    // function filterToy(toy: Toy): void {
    //   for (let filter in filters) {
    //     // console.log(filter);
    //     if (filters[filter].indexOf(toy[filter]) >= 0) {
    //       tmpToysList.add(toy);
    //       // console.log(toy, filters[filter]);
    //     }
    //   }
    // }
    function filterToy(filter: string, toy: Toy) {
      if (filters[filter].indexOf(toy[filter]) >= 0) return true;
      return false;
    }
    function spanFilterToy(toy: Toy): Boolean {
      // console.log("FILTER");
      for (let filter in spanFilters) {
        // console.log(filter);

        if (
          spanFilters[filter].min <= toy[filter] &&
          spanFilters[filter].max >= toy[filter]
        ) {
          // console.log("Year", toy);
          return true;
        }
      }
      return false;
    }
    // toys.forEach((toy) => filterToy(toy));
    let array = toys; //Array.from(tmpToysList);
    array = array.filter(spanFilterToy);
    for (let filter in filters) {
      array = array.filter((toy) => filterToy(filter, toy));
    }
    // console.log("array", array);
    // console.log("render");
    setCurToysList(array);

    setIsFiltred(true);
  }
  //=======================================================END-FilterToys
  function toggleFilter(type, value) {
    // console.log(type, value);
    const index = filters[type].indexOf(value);
    console.log(index, filters[type], value);
    if (index >= 0) {
      filters[type].splice(index, index + 1);
      console.log("??", filters);
    } else {
      console.log("!!", filters);
      filters[type].push(value);
    }
    // console.log(filters);
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

      {/* <SpanInput max={10} min={0} step={1} /> */}
    </div>
  );
}

export default App;
