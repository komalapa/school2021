import React, { FC } from "react";
import type { ToysContainerProps } from "../../types/props";
import { ToyCard } from "../ToyCard/ToyCard";

import "./ToysContainer.css";

export const ToysContainter: FC<ToysContainerProps> = (props) => {
  const { toys, toggleFavorite, favoritesCount } = props;

  const cards = toys.map((toy, id) => (
    <ToyCard
      key={id}
      toy={toy}
      toggleFavorite={toggleFavorite}
      favoritesCount={favoritesCount}
    />
  ));
  return (
    <div className="toys-container">
      {cards}
      {toys.length <= 0 && (
        <span className="toys-container__text">
          Извините, совпадений не обнаружено
        </span>
      )}
    </div>
  );
};
