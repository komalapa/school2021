import { FC } from "react";
import { Direction } from "../../types/types";
import { RadioInput } from "../RadioInput/RadioInput";

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
      <RadioInput
        radioName="sort"
        id="sort-name-up"
        className="sort"
        type="name"
        value={Direction.Up}
        onChoose={handleSort}
        selected={true}
      >
        Название ↑
      </RadioInput>

      <RadioInput
        radioName="sort"
        id="sort-name-down"
        className="sort"
        type="name"
        value={Direction.Down}
        onChoose={handleSort}
        selected={false}
      >
        Название ↓
      </RadioInput>

      <RadioInput
        radioName="sort"
        id="sort-year-up"
        className="sort"
        type="year"
        value={Direction.Up}
        onChoose={handleSort}
        selected={false}
      >
        Год покупки ↑
      </RadioInput>

      <RadioInput
        radioName="sort"
        id="sort-year-down"
        className="sort"
        type="year"
        value={Direction.Down}
        onChoose={handleSort}
        selected={false}
      >
        Год покупки ↓
      </RadioInput>
    </div>
  );
};
