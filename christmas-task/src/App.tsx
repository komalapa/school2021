import React, { useState } from "react";
import { FC } from "react";
import { ToysApp } from "./components/ToysApp/ToysApp";
import TreeApp from "./components/TreeApp/TreeApp";
import { Toy } from "./types/toys/toy";

const App: FC = () => {
  const [favorites, setFavorites] = useState<Toy[]>([]);
  function handleFavorites(favs: Toy[]) {
    setFavorites(favs);
  }
  return (
    <>
      <ToysApp favorites={favorites} setFavorites={handleFavorites} />
      <TreeApp favorites={favorites} />
    </>
  );
};
export default App;
