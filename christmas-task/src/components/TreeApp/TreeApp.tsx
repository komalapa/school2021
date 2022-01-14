import React, { FC, useEffect, useState } from "react";
import { Toy } from "../../types/toys/toy";
import { Colors } from "../../types/types";
import { MainTreeContainer } from "../MainTreeContainer/MainTreeContainer";
import { TreePanel } from "../TreePanel/TreePannel";

import { data } from "../../data";

import "./TreeApp.css";
import { useToggle } from "../shared/hooks/useToggle";
import { ToysPanel } from "../ToysPanel/ToysPanel";
import { Footer } from "../Footer/Footer";

interface TreeAppProps {
  favorites: Toy[];
}
function keyInEnum(e: any, value: string): string {
  const keys = Object.keys(e).filter((x) => e[x] === value);
  return keys.length > 0 ? keys[0] : "";
}
function getColorsFromLS(): Colors[] | false {
  const colorsLS = JSON.parse(
    localStorage.getItem("komalapa-christmas-lights") as string
  );
  if (!colorsLS) return false;
  // eslint-disable-next-line
  //@ts-ignore
  return colorsLS.map((color: Colors) => Colors[keyInEnum(Colors, color)]);
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
  const [isSnow, setIsSnow] = useToggle(
    JSON.parse(localStorage.getItem("komalapa-christmas-snow") as string)
  );
  const [isMusic, setIsMusic] = useToggle(
    JSON.parse(localStorage.getItem("komalapa-christmas-music") as string)
  );
  useEffect(() => {
    setToys(favorites);
  }, [favorites]);

  const [backgroundNumber, setBackgoundNumber] = useState<number>(
    localStorage.getItem("komalapa-christmas-background")
      ? Number(localStorage.getItem("komalapa-christmas-background"))
      : 1
  );
  const [treeNumber, setTreeNumber] = useState<number>(
    localStorage.getItem("komalapa-christmas-tree")
      ? Number(localStorage.getItem("komalapa-christmas-tree"))
      : 1
  );
  const [lights, setLights] = useState<Colors[]>(
    getColorsFromLS() || [Colors.White, Colors.Red, Colors.Blue]
  );

  const getBackgroundUrl = (number: number): string =>
    `../../assets/bg/${number}.jpg`;
  const getTreeUrl = (number: number): string =>
    `../../assets/tree/${number}.png`;
  //handler
  function handleBackground(number: number) {
    setBackgoundNumber(number);
  }
  function handleTree(number: number) {
    setTreeNumber(number);
  }

  function handleLights(value: Colors) {
    const index = lights.indexOf(value);
    if (index >= 0) {
      const curLights = [...lights];
      curLights.splice(index, 1);
      setLights(curLights);
    } else {
      setLights([...lights, value]);
    }
  }

  function handleTakeById(id: number, success = true) {
    const index = toys.indexOf(toys.find((toy) => toy.id === id) as Toy);
    const curToys = [...toys];
    success ? curToys[index].count-- : curToys[index].count++;
    setToys(curToys);
  }

  function handleLS() {
    localStorage.setItem("komalapa-christmas-snow", `${isSnow}`);
    localStorage.setItem("komalapa-christmas-music", `${isMusic}`);
    localStorage.setItem("komalapa-christmas-lights", JSON.stringify(lights));
    localStorage.setItem(
      "komalapa-christmas-background",
      backgroundNumber.toFixed(0)
    );
    localStorage.setItem("komalapa-christmas-tree", treeNumber.toFixed(0));
  }
  handleLS();
  const audio = document.querySelector(".audio") as HTMLAudioElement;
  if (isMusic && audio) audio.play();

  function handleOverDrop(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type !== "drop") {
      return;
    }
    const toyId = e.dataTransfer.getData("toyId");
    const toyImg = document.getElementById(toyId) as HTMLImageElement;
    const parent = toyImg.parentNode as HTMLElement;
    if (parent.className === "toys-area") parent.removeChild(toyImg);
  }

  return (
    <div
      className="tree-app"
      onDragOver={handleOverDrop}
      onDrop={handleOverDrop}
    >
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
        onTakeToy={handleTakeById}
      />
      <ToysPanel
        toys={favorites}
        onTakeToy={handleTakeById}
        isSnow={isSnow}
        toggleSnow={setIsSnow}
        isMusic={isMusic}
        toggleMusic={setIsMusic}
      />
      <audio
        className="audio"
        src="assets/audio/audio.mp3"
        muted={!isMusic}
        autoPlay={true}
        loop={true}
      />
      <Footer />
    </div>
  );
};
export default TreeApp;
