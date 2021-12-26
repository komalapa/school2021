import { FC } from "react";
import { Toy } from "../../types/toys/toy";
import { SmallToyCard } from "../SmallToyCard/SmallToyCard";

import "./SmallToysContainer.css";

type SmallToysContainerProps = {
  toys: Toy[];
  onTakeToy: CallableFunction;
};

export const SmallToysContainer: FC<SmallToysContainerProps> = (props) => {
  const { toys, onTakeToy } = props;

  const cards = toys.map((toy, id) => (
    <SmallToyCard key={id} toy={toy} onTake={onTakeToy} />
  ));
  return <div className="small-toys-container">{cards}</div>;
};
