import React, { useState } from "react";
import { FC } from "react";
import { ToysApp } from "./components/ToysApp/ToysApp";
import TreeApp from "./components/TreeApp/TreeApp";
import { Toy } from "./types/toys/toy";
import "./main.css";
import { Colors } from "./types/types";
import { Lights } from "./components/Lights/Lights";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home/Home";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
const App: FC = () => {
  const [favorites, setFavorites] = useState<Toy[]>([]);
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
