import { FC } from "react";
// import { Direction } from "../../types/types";
import { RadioInput } from "../RadioInput/RadioInput";

import "../../main.css";
import "./BackgroundSelector.css";

type BackgroundSelectorProps = {
  setupBackground: CallableFunction;
  selected: number;
};

export const BackgroundSelector: FC<BackgroundSelectorProps> = (props) => {
  const { setupBackground, selected } = props;

  function handleBackground(value: number) {
    setupBackground(value);
  }
  return (
    //TODO cycle for gen radio
    <div className="background-selector">
      <h3 className="background-selector__header">Фоны</h3>
      <div className="background-selector__wrp">
        <RadioInput
          radioName="background-selector"
          id="background-selector-1"
          className="background-selector"
          type="background-selector"
          value={1}
          onChoose={() => handleBackground(1)}
          selected={selected === 1}
        >
          <span
            className="background-selector__miniature"
            style={{ backgroundImage: "url(../../assets/bg/1.jpg" }}
          ></span>
        </RadioInput>
        <RadioInput
          radioName="background-selector"
          id="background-selector-2"
          className="background-selector"
          type="background-selector"
          value={2}
          onChoose={() => handleBackground(2)}
          selected={selected === 2}
        >
          <span
            className="background-selector__miniature"
            style={{ backgroundImage: "url(../../assets/bg/2.jpg" }}
          ></span>
        </RadioInput>
        <RadioInput
          radioName="background-selector"
          id="background-selector-3"
          className="background-selector"
          type="background-selector"
          value={3}
          onChoose={() => handleBackground(3)}
          selected={selected === 3}
        >
          <span
            className="background-selector__miniature"
            style={{ backgroundImage: "url(../../assets/bg/3.jpg" }}
          ></span>
        </RadioInput>
        <RadioInput
          radioName="background-selector"
          id="background-selector-4"
          className="background-selector"
          type="background-selector"
          value={4}
          onChoose={() => handleBackground(4)}
          selected={selected === 4}
        >
          <span
            className="background-selector__miniature"
            style={{ backgroundImage: "url(../../assets/bg/4.jpg" }}
          ></span>
        </RadioInput>
        <RadioInput
          radioName="background-selector"
          id="background-selector-5"
          className="background-selector"
          type="background-selector"
          value={5}
          onChoose={() => handleBackground(5)}
          selected={selected === 5}
        >
          <span
            className="background-selector__miniature"
            style={{ backgroundImage: "url(../../assets/bg/5.jpg" }}
          ></span>
        </RadioInput>
        <RadioInput
          radioName="background-selector"
          id="background-selector-6"
          className="background-selector"
          type="background-selector"
          value={6}
          onChoose={() => handleBackground(6)}
          selected={selected === 6}
        >
          <span
            className="background-selector__miniature"
            style={{ backgroundImage: "url(../../assets/bg/6.jpg" }}
          ></span>
        </RadioInput>
        <RadioInput
          radioName="background-selector"
          id="background-selector-7"
          className="background-selector"
          type="background-selector"
          value={7}
          onChoose={() => handleBackground(7)}
          selected={selected === 7}
        >
          <span
            className="background-selector__miniature"
            style={{ backgroundImage: "url(../../assets/bg/7.jpg" }}
          ></span>
        </RadioInput>
        <RadioInput
          radioName="background-selector"
          id="background-selector-8"
          className="background-selector"
          type="background-selector"
          value={8}
          onChoose={() => handleBackground(8)}
          selected={selected === 8}
        >
          <span
            className="background-selector__miniature"
            style={{ backgroundImage: "url(../../assets/bg/8.jpg" }}
          ></span>
        </RadioInput>
      </div>
    </div>
  );
};
