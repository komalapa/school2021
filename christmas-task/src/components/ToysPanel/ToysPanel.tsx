import React, { FC } from "react";
import { SmallToysContainer } from "../SmallToysContainer/SmallToysContainer";

import { ReactComponent as SnowIcon } from "../../assets/svg/snow.svg";
import { ReactComponent as MusicIcon } from "../../assets/svg/audio.svg";
import type { ToysPanelProps } from "../../types/props";

import "./ToysPanel.css";

export const ToysPanel: FC<ToysPanelProps> = (props) => {
  const { toys, onTakeToy, isSnow, toggleSnow, isMusic, toggleMusic } = props;
  function handleClear() {
    localStorage.clear();
  }
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
      <span className="ls__clear" onClick={handleClear}>
        Удалить сохраненные настройки
      </span>
    </div>
  );
};
