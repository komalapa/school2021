import React, { FC } from "react";
import type { TreePanelProps } from "../../types/props";
import { Colors, Filters } from "../../types/types";
import { BackgroundSelector } from "../BackgroundSelector/BackgroundSelector";
import { ColorFilter } from "../ColorFilter/ColorFilter";
import { TreeSelector } from "../TreeSelector/TreeSelector";
import "./TreePanel.css";

export const TreePanel: FC<TreePanelProps> = (props) => {
  const {
    setBackground,
    setTree,
    backgroundNumber,
    treeNumber,
    setLights,
    lights
  } = props;

  function handleBackground(value: number) {
    setBackground(value);
  }

  function handleTree(value: number) {
    setTree(value);
  }
  function handleLights(_: keyof Filters, value: Colors) {
    setLights(value);
  }
  return (
    <div className="tree-panel">
      <BackgroundSelector
        setupBackground={handleBackground}
        selected={backgroundNumber}
      />
      <TreeSelector setupTree={handleTree} selected={treeNumber} />
      <ColorFilter
        toggleFilter={handleLights}
        checked={lights}
        header={"Гирлянда"}
      />
    </div>
  );
};
