import { Direction } from "../../types/types";

import "./SelectSort.css";

type SelectSortProps = {
  setupSort: CallableFunction;
};

export function SelectSort(props: SelectSortProps) {
  return (
    <div className="sort">
      <h3 className="sort__header">Сортировка</h3>

      <div>
        <input
          type="radio"
          name="sort"
          id="sort-name-up"
          className="sort__radio"
          onClick={() => props.setupSort("name", Direction.Up)}
          defaultChecked
        />
        <label className="sort__label" defaultChecked htmlFor="sort-name-up">
          Название ↑
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="sort"
          id="sort-name-down"
          className="sort__radio"
          onClick={() => props.setupSort("name", Direction.Down)}
        />
        <label className="sort__label" htmlFor="sort-name-down">
          Название ↓
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="sort"
          id="sort-year-up"
          className="sort__radio"
          onClick={() => props.setupSort("year", Direction.Up)}
        />
        <label className="sort__label" htmlFor="sort-year-up">
          Год покупки ↑
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="sort"
          id="sort-year-down"
          className="sort__radio"
          onClick={() => props.setupSort("year", Direction.Down)}
        />
        <label className="sort__label" htmlFor="sort-year-down">
          Год покупки ↓
        </label>
      </div>
    </div>
  );
}
