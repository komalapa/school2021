import { Toy } from "../../types/toys/toy";
import { ToyCard } from "../ToyCard/ToyCard";
import "./ToysContainer.css";

type ToysContainerProps = {
  toys: Array<Toy>;
};

export function ToysContainter(props: ToysContainerProps) {
  const cards = props.toys.map((toy, id) => <ToyCard key={id} toy={toy} />);
  return <div className="toys-container">{cards}</div>;
}
