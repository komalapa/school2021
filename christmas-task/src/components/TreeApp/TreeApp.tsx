import { FC, useEffect, useState } from "react";
import { Toy } from "../../types/toys/toy";
import { Colors } from "../../types/types";
import { MainTreeContainer } from "../MainTreeContainer/MainTreeContainer";
import { TreePanel } from "../TreePanel/TreePannel";

import "./TreeApp.css";

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
  const [lights, setLights] = useState<Colors[]>([
    Colors.White,
    Colors.Red,
    Colors.Blue,
  ]);

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

  function handleLights(value: Colors) {
    const index = lights.indexOf(value);
    if (index >= 0) {
      let curLights = [...lights];
      curLights.splice(index, 1);
      setLights(curLights);
      // setIsFiltered(false);
    } else {
      setLights([...lights, value]);
      // setIsFiltered(false);
    }
    // setIsFiltered(false);
  }

  console.log(getBackgroundUrl(backgroundNumber));

  return (
    <div className="tree-app">
      <TreePanel
        setBackground={handleBackground}
        setTree={handleTree}
        treeNumber={treeNumber}
        backgroundNumber={backgroundNumber}
        setLights={handleLights}
        lights={lights}
      />
      <MainTreeContainer
        backgroundUrl={getBackgroundUrl(backgroundNumber)}
        treeUrl={getTreeUrl(treeNumber)}
        lights={lights}
      />
    </div>
  );
};
export default TreeApp;
