import { Toy } from "../../types/toys/toy";
import { ToyCard } from "../ToyCard/ToyCard";
import "./ToysContainer.css";

type ToysContainerProps = {
  toys: Toy[];
  toggleFavorite: CallableFunction;
  favoritesCount: number;
};

export function ToysContainter(props: ToysContainerProps) {
  const cards = props.toys.map((toy, id) => (
    <ToyCard
      key={id}
      toy={toy}
      toggleFavorite={props.toggleFavorite}
      favoritesCount={props.favoritesCount}
    />
  ));
  return (
    <div className="toys-container">
      {cards}
      {props.toys.length <= 0 && (
        <span className="toys-container__text">
          Извините, совпадений не обнаружено
        </span>
      )}
    </div>
  );
}
