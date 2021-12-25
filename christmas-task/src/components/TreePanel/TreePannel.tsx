import { FC } from "react";
import { Colors } from "../../types/types";
import { BackgroundSelector } from "../BackgroundSelector/BackgroundSelector";
import { ColorFilter } from "../ColorFilter/ColorFilter";
import { TreeSelector } from "../TreeSelector/TreeSelector";
import "./TreePanel.css";
interface TreePanelProps {
  setBackground: CallableFunction;
  setTree: CallableFunction;
  backgroundNumber: number;
  treeNumber: number;
  setLights: CallableFunction;
  lights: Colors[];
}
export const TreePanel: FC<TreePanelProps> = (props) => {
  const {
    setBackground,
    setTree,
    backgroundNumber,
    treeNumber,
    setLights,
    lights,
  } = props;

  function handleBackground(value) {
    setBackground(value);
  }

  function handleTree(value) {
    setTree(value);
  }
  function handleLights(_, value) {
    setLights(value);
  }
  return (
    <div className="tree-panel">
      <BackgroundSelector
        setupBackground={handleBackground}
        selected={backgroundNumber}
      ></BackgroundSelector>
      <TreeSelector setupTree={handleTree} selected={treeNumber}></TreeSelector>
      <ColorFilter
        toggleFilter={handleLights}
        checked={lights}
        header={"Гирлянда"}
      ></ColorFilter>
    </div>
  );
};
