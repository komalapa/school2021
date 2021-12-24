import { FC } from "react";
import { Direction } from "../../types/types";
import { SortRadioInput } from "../SortRadioInput/SortRadioInput";

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
      <SortRadioInput
        radioName="sort"
        id="sort-name-up"
        className="sort__radio"
        type="name"
        direction={Direction.Up}
        onSort={handleSort}
      >
        Название ↑
      </SortRadioInput>

      <SortRadioInput
        radioName="sort"
        id="sort-name-down"
        className="sort__radio"
        type="name"
        direction={Direction.Down}
        onSort={handleSort}
      >
        Название ↓
      </SortRadioInput>

      <SortRadioInput
        radioName="sort"
        id="sort-year-up"
        className="sort__radio"
        type="year"
        direction={Direction.Up}
        onSort={handleSort}
      >
        Год покупки ↑
      </SortRadioInput>

      <SortRadioInput
        radioName="sort"
        id="sort-year-down"
        className="sort__radio"
        type="year"
        direction={Direction.Down}
        onSort={handleSort}
      >
        Год покупки ↓
      </SortRadioInput>
    </div>
  );
};
