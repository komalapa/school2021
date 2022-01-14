import React, { FC, useState } from "react";
import { Toy } from "../../types/toys/toy";

import "./SmallToyCard.css";

type SmallToyCardProps = {
  toy: Toy;
  onTake: CallableFunction;
};

export const SmallToyCard: FC<SmallToyCardProps> = (props) => {
  const { toy } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const path = `/assets/toys/${toy.id}.png`;
  const image: HTMLImageElement = new Image();
  image.src = path;
  image.onload = () => setIsLoaded(true);

  const toyImg = (
    <img
      className={`small-toy-card__image ${
        toy.count === 0 ? "small-toy-card__image-empty" : ""
      }`}
      id={`toy-${toy.id}`}
      alt="игрушка"
      src={image.src}
      onDragStart={handleDragStart}
      data-id={toy.id}
    />
  );

  function handleDragStart(e: React.DragEvent) {
    if (toy.count <= 0) {
      e.preventDefault();
      return;
    }
    const target = e.target as HTMLImageElement;
    e.dataTransfer.setData("id", `${toy.id}`);
    e.dataTransfer.setData("toyId", `toy-${toy.id}`);
    e.dataTransfer.setData("toySrc", target.src);
    e.dataTransfer.setData("count", toy.count.toFixed(0));
  }

  return (
    <div className="small-toy-card">
      {isLoaded ? toyImg : <div className="small-toy-card__image" />}
      <span className="small-toy-card__count">{toy.count}</span>
    </div>
  );
};
