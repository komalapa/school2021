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
import { Colors, Shapes, Size } from "./types/types";

enum Direction {
  Up,
  Down,
}
interface spanObject {
  min: number;
  max: number;
}

interface Filter {
  type: "color" | "shape" | "size";
  values: Colors[] | Shapes[] | Size[];
}
interface FilterSpan {
  type: "year" | "count";
  values: spanObject;
}

function isSpanObject(object: any): object is spanObject {
  return "min" in object;
}
interface Sort {
  type: "name" | "year" | "number";
  direction: Direction;
}

const toys: Array<Toy> = data.map((item) => new Toy(item));

function App() {
  const [curToysList, setCurToysList] = useState(toys);

  const filters = {
    color: [],
    shape: [],
    size: [],
  };
  const spanFilters = {
    year: { min: -1, max: 2200 },
    count: { max: -1, min: 100 },
  };
  const [sort, setSort] = useState({ type: "name", direction: Direction.Up });
  const [isFiltred, setIsFiltred] = useState(false);
  function filterToys() {
    setCurToysList([]);
    console.log("filter");
    const tmpToysList: Set<Toy> = new Set();
    function filterToy(toy: Toy): void {
      for (let filter in filters) {
        // console.log(filter);
        if (filters[filter].indexOf(toy[filter]) >= 0) {
          tmpToysList.add(toy);
        }
      }
    }
    function spanFilterToy(toy: Toy): Boolean {
      console.log("FILTER");
      for (let filter in spanFilters) {
        console.log(filter);

        if (
          spanFilters[filter].min <= toy[filter] &&
          spanFilters[filter].max >= toy[filter]
        ) {
          console.log("Year", toy);
          return true;
        }
      }
      return false;
    }
    toys.forEach((toy) => filterToy(toy));
    let array = Array.from(tmpToysList);
    array = array.filter(spanFilterToy);
    setCurToysList(array);

    setIsFiltred(true);
  }

  function toggleFilter(type, value) {
    const index = filters[type].indexOf(value);
    if (index >= 0) {
      filters[type].splice(index, index + 1);
    } else {
      filters[type].push(value);
    }
    setIsFiltred(false);
  }

  function toggleSpanFilter(type, min, max) {
    spanFilters[type].min = min;
    spanFilters[type].max = max;
    setIsFiltred(false);
  }
  filters.color.push(Colors.Green, Colors.Red);
  // toggleFilter("color", Colors.Red);
  // toggleFilter("color", Colors.Blue);
  // console.log(filters);
  // toggleSpanFilter("year", 1990, 2022);
  // toggleSpanFilter("count", 2, 100);

  // console.log(filters, spanFilters);

  // if (!isFiltred) filterToys();

  return (
    <div className="App">
      <ToysContainter toys={curToysList} />

      <SpanInput max={10} min={0} step={1} />
    </div>
  );
}

export default App;
