import { FC } from "react";
import { Direction } from "../../types/types";
// import { SortRadioInput } from "../SortRadioInput/SortRadioInput";

import "./SelectSort.css";

type SelectSortProps = {
  setupSort: CallableFunction;
};

export const SelectSort: FC<SelectSortProps> = (props) => {
  const { setupSort } = props;

  function handleSort(type, direction) {
    setupSort(type, direction);
  }
  return (
    <div className="sort">
      <h3 className="sort__header">Сортировка</h3>
      {/* <SortRadioInput
        name="sort"
        id="sort-name-up"
        className="sort__radio"
        type="name"
        direction={Direction.Up}
        onSort={handleSort}
      >
        Название ↑
      </SortRadioInput> */}

      <div>
        <input
          type="radio"
          name="sort"
          id="sort-name-up"
          className="sort__radio"
          onClick={() => handleSort("name", Direction.Up)}
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
          onClick={() => handleSort("name", Direction.Down)}
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
          onClick={() => handleSort("year", Direction.Up)}
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
          onClick={() => handleSort("year", Direction.Down)}
        />
        <label className="sort__label" htmlFor="sort-year-down">
          Год покупки ↓
        </label>
      </div>
    </div>
  );
};
