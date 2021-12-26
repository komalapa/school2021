import { FC, useState } from "react";
import { Toy } from "../../types/toys/toy";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

import "./SmallToyCard.css";
import "../../main.css";

type SmallToyCardProps = {
  toy: Toy;
  onTake: CallableFunction;
};

export const SmallToyCard: FC<SmallToyCardProps> = (props) => {
  const { toy, onTake } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  function handleTake(): void {
    console.log("take");
  }
  const path: string = `/assets/toys/${toy.id}.png`;
  const image: HTMLImageElement = new Image();
  image.src = path;
  image.onload = () => setIsLoaded(true);

  return (
    <div className="small-toy-card">
      {isLoaded ? (
        <img className="small-toy-card__image" alt="игрушка" src={image.src} />
      ) : (
        <div className="small-toy-card__image" />
      )}
      <span className="small-toy-card__count">{toy.count}</span>
    </div>
  );
};
