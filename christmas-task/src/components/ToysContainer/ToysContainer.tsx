import { Toy } from "../../types/toys/toy";
import { ToyCard } from "../ToyCard/ToyCard";
import "./ToysContainer.css";

type ToysContainerProps = {
  toys: Array<Toy>;
  toggleFavorite: CallableFunction;
  favoritesCount: number;
};

export function ToysContainter(props: ToysContainerProps) {
  // console.log("ITEMS_SHOWED", props.toys.length);
  const cards = props.toys.map((toy, id) => (
    <ToyCard
      key={id}
      toy={toy}
      toggleFavorite={props.toggleFavorite}
      favoritesCount={props.favoritesCount}
    />
  ));
  return <div className="toys-container">{cards}</div>;
}
