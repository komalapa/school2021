import { ReactComponent as HeartIcon } from "../../assets/svg/heart.svg";
import { ReactComponent as HeartIconFull } from "../../assets/svg/heart-full.svg";
import React, { FC, useState } from "react";
import type { FavoriteProps } from "../../types/props";
import { Message } from "../Message/Message";

import "./FavoriteButton.css";


export const FavoriteButton: FC<FavoriteProps> = (props) => {
  const { isFavorite, toggleFavorite, favoritesCount } = props;
  const [showMsg, setShowMsg] = useState(false);
  function handleFavorite() {
    if (favoritesCount < 20 || isFavorite === true) {
      toggleFavorite();
    } else {
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 3000);
    }
  }
  return (
    <button
      className={
        isFavorite ? "favorite-button favorite-button__on" : "favorite-button"
      }
      onClick={() => handleFavorite()}
    >
      {isFavorite ? <HeartIconFull /> : <HeartIcon />}
      {showMsg && <Message message="Извините, все слоты заполнены" />}
    </button>
  );
};
