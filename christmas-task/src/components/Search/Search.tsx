import { useState } from "react";
import "./Search.css";

type SearchProps = {
  searchLine: string;
  setupSearch: CallableFunction;
};

export function Search(props: SearchProps) {
  console.log(props.searchLine);
  const [line, setLine] = useState<string>(props.searchLine);
  return (
    <div className="search">
      <input
        autoFocus
        autoComplete="off"
        type="text"
        name="toys-name-search"
        id="toys-name-search"
        className="search__text"
        onInput={(e) => {
          setLine(e.currentTarget.value);
          props.setupSearch(e.currentTarget.value);
        }}
        // defaultValue={line}
        value={line}
        placeholder="Поиск"
      />
      <button
        className="search__clear"
        onClick={() => {
          setLine("");
          props.setupSearch("");
        }}
      >
        🞫
      </button>
    </div>
  );
}
