import { FC, useEffect, useState } from "react";
import { Toy } from "../../types/toys/toy";
import { BackgroundSelector } from "../BackgroundSelector/BackgroundSelector";

interface TreeAppProps {
  favorites: Toy[];
}
const TreeApp: FC<TreeAppProps> = (props) => {
  const { favorites } = props;

  const [toys, setToys] = useState<Toy[]>([]);

  useEffect(() => {
    setToys(favorites);
  }, [favorites]);

  const [backgroundNumber, setBackgoundNumber] = useState<number>(1);

  const getBackgroundUrl = (number: number): string =>
    `../../assets/bg/${number}.jpg`;
  //handler
  function handleBackground(number) {
    setBackgoundNumber(number);
  }

  console.log(getBackgroundUrl(backgroundNumber));

  return (
    <>
      <BackgroundSelector
        setupBackground={handleBackground}
        selected={backgroundNumber}
      ></BackgroundSelector>
      ;<div></div>
    </>
  );
};
export default TreeApp;
