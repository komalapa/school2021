import { FC, useState } from "react";
import { Toy } from "../../types/toys/toy";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

import "./ToyCard.css";

type ToyCardProps = {
  toy: Toy;
  toggleFavorite: CallableFunction;
  favoritesCount: number;
};

export const ToyCard: FC<ToyCardProps> = (props) => {
  const { toy, toggleFavorite, favoritesCount } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  function handleToggleFavorite(): void {
    toggleFavorite(toy);
  }
  const path: string = `/assets/toys/${toy.id}.png`;
  const image: HTMLImageElement = new Image();
  image.src = path;
  image.onload = () => setIsLoaded(true);

  return (
    <div className="toy-card">
      <h3 className="toy-card__header">{toy.name}</h3>
      {isLoaded ? (
        <img className="toy-card__image" alt="игрушка" src={image.src} />
      ) : (
        <div className="toy-card__image" />
      )}
      <ul className="toy-card__properties-list">
        <li className="toy-card__properties-list-item">
          <span className="toy-card__properties-name">Количество:</span>{" "}
          {toy.count}шт.
        </li>
        <li className="toy-card__properties-list-item">
          <span className="toy-card__properties-name">Год покупки:</span>{" "}
          {toy.year}год
        </li>
        <li className="toy-card__properties-list-item">
          <span className="toy-card__properties-name">Форма игрушки:</span>{" "}
          {toy.shape}
        </li>
        <li className="toy-card__properties-list-item">
          <span className="toy-card__properties-name">Цвет:</span> {toy.color}
        </li>
        <li className="toy-card__properties-list-item">
          <span className="toy-card__properties-name">Размер игрушки:</span>{" "}
          {toy.size}
        </li>
      </ul>
      <FavoriteButton
        isFavorite={toy.isFavorite}
        toggleFavorite={handleToggleFavorite}
        favoritesCount={favoritesCount}
      />
    </div>
  );
};
