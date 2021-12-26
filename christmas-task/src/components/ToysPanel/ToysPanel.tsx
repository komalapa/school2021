import { FC } from "react";
import { Toy } from "../../types/toys/toy";
import { SmallToysContainer } from "../SmallToysContainer/SmallToysContainer";

import { ReactComponent as SnowIcon } from "../../assets/svg/snow.svg";
import { ReactComponent as MusicIcon } from "../../assets/svg/audio.svg";

import "./ToysPanel.css";

interface ToysPanelProps {
  toys: Toy[];
  onTakeToy: CallableFunction;
  isSnow: boolean;
  toggleSnow: CallableFunction;
  isMusic: boolean;
  toggleMusic: CallableFunction;
}
export const ToysPanel: FC<ToysPanelProps> = (props) => {
  const { toys, onTakeToy, isSnow, toggleSnow, isMusic, toggleMusic } = props;
  return (
    <div className="toys-panel">
      <SnowIcon
        onClick={() => toggleSnow()}
        className={`snow-button ${
          isSnow ? "snow-button__on" : "snow-button__off"
        }`}
      />
      <MusicIcon
        onClick={() => toggleMusic()}
        className={`music-button ${
          isMusic ? "music-button__on" : "music-button__off"
        }`}
      />
      <SmallToysContainer
        toys={toys}
        onTakeToy={onTakeToy}
      ></SmallToysContainer>
    </div>
  );
};
