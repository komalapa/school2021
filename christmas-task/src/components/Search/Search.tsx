import { FC, useState } from "react";

import "./Search.css";

type SearchProps = {
  searchLine: string;
  setupSearch: CallableFunction;
};

export const Search: FC<SearchProps> = (props) => {
  const { searchLine, setupSearch } = props;
  const [line, setLine] = useState<string>(searchLine);
  function handleSearch(e) {
    setLine(e.currentTarget.value);
    setupSearch(e.currentTarget.value);
  }
  function handleReset() {
    setLine("");
    setupSearch("");
  }
  return (
    <div className="search">
      <input
        autoFocus
        autoComplete="off"
        type="text"
        name="toys-name-search"
        id="toys-name-search"
        className="search__text"
        onInput={handleSearch}
        value={line}
        placeholder="Поиск"
      />
      <button className="search__clear" onClick={handleReset}>
        🞫
      </button>
    </div>
  );
};
