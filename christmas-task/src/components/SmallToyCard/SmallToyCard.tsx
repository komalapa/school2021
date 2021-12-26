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

  const path: string = `/assets/toys/${toy.id}.png`;
  const image: HTMLImageElement = new Image();
  image.src = path;
  image.onload = () => setIsLoaded(true);

  const toyImg = (
    <img
      className="small-toy-card__image"
      id={`toy-${toy.id}`}
      alt="игрушка"
      src={image.src}
      onDragStart={handleDragStart}
    />
  );

  function handleDragStart(e) {
    if (toy.count <= 0) {
      e.preventDefault();
      return;
    }
    console.log(e);
    e.dataTransfer.setData("toyId", `toy-${toy.id}`);
    e.dataTransfer.setData("toySrc", e.target.src);
    e.dataTransfer.setData("count", toy.count);
    onTake(toy);
  }

  return (
    <div className="small-toy-card">
      {isLoaded ? toyImg : <div className="small-toy-card__image" />}
      <span className="small-toy-card__count">{toy.count}</span>
    </div>
  );
};