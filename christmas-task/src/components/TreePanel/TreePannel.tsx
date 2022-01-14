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

  return (
    <div className="tree-panel">
      <BackgroundSelector
        setupBackground={(value:number)=>setBackground(value)}
        selected={backgroundNumber}
      />
      <TreeSelector setupTree={(value: number) => setTree(value)} selected={treeNumber} />
      <ColorFilter
        toggleFilter={(_: keyof Filters, value: Colors) => setLights(value)}
        checked={lights}
        header={"Гирлянда"}
      />
    </div>
  );
};
