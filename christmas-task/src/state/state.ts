// Usage
// import { SingletonInstance } from "path/to/Singleton";
import { count } from "console";
import { isArray } from "util";
import data from "../data";
import { Toy } from "../types/toys/toy";
import { Colors, Shapes, Size } from "../types/types";
enum Direction {
  Up,
  Down,
}
interface spanObject {
  min: number;
  max: number;
}
function isSpanObject(object: any): object is spanObject {
  return "min" in object;
}
// interface Filters {
//   color: Colors[];
//   shape: Shapes[];
//   size: Size[];
//   year: spanObject;
//   count: spanObject;
// }
interface Filter {
  type: "color" | "shape" | "size";
  values: Colors[] | Shapes[] | Size[];
}
interface FilterSpan {
  type: "year" | "number";
  values: spanObject;
}

// type filtersKeys = keyof Filters;

interface Sort {
  type: "name" | "year" | "number";
  direction: Direction;
}

export namespace State {
  const toys: Toy[] = data.map((item) => new Toy(item));
  let curToysList: Set<Toy> = new Set();
  const filters: Filter[] = [
    { type: "color", values: [] },
    { type: "shape", values: [] },
    { type: "size", values: [] },
  ];
  const filtersSpan: FilterSpan[] = [
    { type: "year", values: { min: -1, max: -1 } },
    { type: "number", values: { max: -1, min: -1 } },
  ];
  // export const filters: Filters = {
  //   color: [],
  //   shape: [],
  //   size: [],
  //   year: { min: -1, max: -1 },
  //   count: { min: -1, max: -1 },
  // };
  export const sort: Sort = { type: "name", direction: Direction.Up };
  // export function someMethod() { ... }

  // export function sortToys() {
  //   curToysList = new Set(toys);
  //   function applyFilter(key: string, filter: Colors[] | Shapes[] | Size[] | spanObject ) {
  //     // const filter: Colors[] | Shapes[] | Size[] | spanObject = filters[key];
  //     if (Array.isArray(filter)) {
  //       filter.forEach((prop) => {
  //         toys.forEach((toy) => {
  //           if (toy[key] === prop) curToysList.add(toy);
  //         });
  //       });
  //     } else {
  //       const spanCheck = (toy: Toy): boolean => {
  //         if (isSpanObject(filter) && filter.min >= 0 && toy[key] < filter.min)
  //           return false;
  //         if (isSpanObject(filter) && filter.max >= 0 && toy[key] > filter.max)
  //           return false;
  //         return true;
  //       };
  //       toys.forEach((toy) => {
  //         if (spanCheck(toy)) curToysList.add(toy);
  //       });
  //     }
  //   }
  // const filtersKeysInst: filtersKeys = ;
  // filtersKeysInst.forEach(element => {

  // }); {
  //   applyFilter(key)
  // }

  export function sortToys() {
    curToysList = new Set(toys);
    function filterToy(toy: Toy) {
      filters.forEach((f) => {
        f.values.forEach((v) => {
          if (toy[f.type] === v) curToysList.add(toy);
        });
      });
    }
  }
}
