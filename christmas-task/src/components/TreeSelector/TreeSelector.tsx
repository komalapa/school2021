import React, { FC } from "react";
import { RadioInput } from "../RadioInput/RadioInput";

import "../../main.css";
import "./TreeSelector.css";

type TreeSelectorProps = {
  setupTree: CallableFunction;
  selected: number;
};

export const TreeSelector: FC<TreeSelectorProps> = (props) => {
  const { setupTree, selected } = props;

  function handleTree(value: number) {
    setupTree(value);
  }
  return (
    <div className="tree-selector">
      <h3 className="tree-selector__header">Ёлочки</h3>
      <div className="tree-selector__wrp">
        <RadioInput
          radioName="tree-selector"
          id="tree-selector-1"
          className="tree-selector"
          type="tree-selector"
          value={1}
          onChoose={() => handleTree(1)}
          selected={selected === 1}
        >
          <span
            className="tree-selector__miniature"
            style={{ backgroundImage: "url(../../assets/tree/1.png" }}
          ></span>
        </RadioInput>
        <RadioInput
          radioName="tree-selector"
          id="tree-selector-2"
          className="tree-selector"
          type="tree-selector"
          value={2}
          onChoose={() => handleTree(2)}
          selected={selected === 2}
        >
          <span
            className="tree-selector__miniature"
            style={{ backgroundImage: "url(../../assets/tree/2.png" }}
          ></span>
        </RadioInput>
        <RadioInput
          radioName="tree-selector"
          id="tree-selector-3"
          className="tree-selector"
          type="tree-selector"
          value={3}
          onChoose={() => handleTree(3)}
          selected={selected === 3}
        >
          <span
            className="tree-selector__miniature"
            style={{ backgroundImage: "url(../../assets/tree/3.png" }}
          ></span>
        </RadioInput>
        <RadioInput
          radioName="tree-selector"
          id="tree-selector-4"
          className="tree-selector"
          type="tree-selector"
          value={4}
          onChoose={() => handleTree(4)}
          selected={selected === 4}
        >
          <span
            className="tree-selector__miniature"
            style={{ backgroundImage: "url(../../assets/tree/4.png" }}
          ></span>
        </RadioInput>
      </div>
    </div>
  );
};
