import { FC, useEffect, useState } from "react";
import { Toy } from "../../types/toys/toy";
import { Colors } from "../../types/types";
import { MainTreeContainer } from "../MainTreeContainer/MainTreeContainer";
import { SmallToysContainer } from "../SmallToysContainer/SmallToysContainer";
import { TreePanel } from "../TreePanel/TreePannel";

import { data } from "../../data";

import "./TreeApp.css";
import { useToggle } from "../shared/hooks/useToggle";
import { ToysPanel } from "../ToysPanel/ToysPanel";

interface TreeAppProps {
  favorites: Toy[];
}
const TreeApp: FC<TreeAppProps> = (props) => {
  const { favorites } = props;

  if (favorites.length === 0) {
    for (let i = 0; i < 20; i++) {
      const toy = new Toy(data[i]);
      favorites.push(toy);
    }
  }
  const [toys, setToys] = useState<Toy[]>([]);
  const [isSnow, setIsSnow] = useToggle(false);
  const [isMusic, setIsMusic] = useToggle(false);

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
    } else {
      setLights([...lights, value]);
    }
  }
  function handleTake(toy) {
    // toy.count--;
    // console.log(toy);
    const index = toys.indexOf(toy);
    const curToys = [...toys];
    curToys[index].count--;
    setToys(curToys);
  }
  // console.log(getBackgroundUrl(backgroundNumber));

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
        isSnow={isSnow}
      />
      {/* <SmallToysContainer toys={favorites} onTakeToy={handleTake} /> */}
      <ToysPanel
        toys={favorites}
        onTakeToy={handleTake}
        isSnow={isSnow}
        toggleSnow={setIsSnow}
        isMusic={isMusic}
        toggleMusic={setIsMusic}
      />
    </div>
  );
};
export default TreeApp;
