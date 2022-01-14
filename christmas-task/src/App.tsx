import React, { useState } from "react";
import { FC } from "react";
import { ToysApp } from "./components/ToysApp/ToysApp";
import TreeApp from "./components/TreeApp/TreeApp";
import { Toy } from "./types/toys/toy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import data from "./data";

const toys: Toy[] = data.map((item) => new Toy(item));

const initialFavorites = () => {
  const favoritesString = localStorage.getItem("komalapaChristmasFavorites");
  let lsFavorites;
  if (favoritesString) lsFavorites = JSON.parse(favoritesString);
  if (lsFavorites) {
    lsFavorites = lsFavorites
      .filter((toy: Toy) => toy)
      .map((fav: Toy) => toys.find((toy: Toy) => fav.id === toy.id));
    lsFavorites.forEach((toy: Toy) => {
      toy.isFavorite = true;
    });
    return lsFavorites;
  }
  return [];
};

const App: FC = () => {
  const [favorites, setFavorites] = useState<Toy[]>(initialFavorites);
  function handleFavorites(favs: Toy[]) {
    setFavorites(favs);
  }
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/toys"
            element={
              <ToysApp favorites={favorites} sendFavorites={handleFavorites} />
            }
          />
          <Route path="/tree" element={<TreeApp favorites={favorites} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
