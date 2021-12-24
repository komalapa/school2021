import { FC, useEffect, useState } from "react";
import { Toy } from "../../types/toys/toy";
import { BackgroundSelector } from "../BackgroundSelector/BackgroundSelector";
import { TreeSelector } from "../TreeSelector/TreeSelector";

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
  const [treeNumber, setTreeNumber] = useState<number>(1);

  const getBackgroundUrl = (number: number): string =>
    `../../assets/bg/${number}.jpg`;
  const getTreeUrl = (number: number): string =>
    `../../assets/tree/${number}.png`;
  //handler
  function handleBackground(number) {
    setBackgoundNumber(number);
  }
  function handleTree(number) {
    setTreeNumber(number);
  }

  console.log(getBackgroundUrl(backgroundNumber));

  return (
    <>
      <BackgroundSelector
        setupBackground={handleBackground}
        selected={backgroundNumber}
      ></BackgroundSelector>
      <TreeSelector
        setupTree={handleTree}
        selected={backgroundNumber}
      ></TreeSelector>
      ;<div></div>
    </>
  );
};
export default TreeApp;
