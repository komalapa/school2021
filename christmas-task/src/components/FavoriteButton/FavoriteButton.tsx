import "./FavoriteButton.css";
import { ReactComponent as HeartIcon } from "../../assets/svg/heart.svg";
import { ReactComponent as HeartIconFull } from "../../assets/svg/heart-full.svg";
import { useState } from "react";
import { Message } from "../Message/Message";
type FavoriteProps = {
  isFavorite: boolean;
  toggleFavorite: CallableFunction;
  favoritesCount: number;
};

export function FavoriteButton(props: FavoriteProps) {
  // let isFavorite = props.isFavorite;
  const [showMsg, setShowMsg] = useState(false);
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  function toggleFavorite() {
    console.log(props.favoritesCount);
    if (props.favoritesCount < 20 || props.isFavorite === true) {
      // setIsFavorite(!isFavorite);
      props.toggleFavorite();
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
      onClick={() => toggleFavorite()}
    >
      {props.isFavorite ? <HeartIconFull /> : <HeartIcon />}
      {showMsg && <Message message="Извините, все слоты заполнены" />}
    </button>
  );
}
