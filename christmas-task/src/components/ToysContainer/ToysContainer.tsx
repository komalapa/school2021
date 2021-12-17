import { useState } from "react";
import { Toy } from "../../types/toys/toy";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { ToyCard } from "../ToyCard/ToyCard";
// import '../../main.css'
import "./ToysContainer.css";

type ToysContainerProps = {
  toys: Array<Toy>;
};

export function ToysContainter(props: ToysContainerProps) {
  const cards = props.toys.map((toy) => <ToyCard toy={toy} />);
  return <div className="toys-container">{cards}</div>;
}
