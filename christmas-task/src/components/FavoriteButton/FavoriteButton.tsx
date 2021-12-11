import './FavoriteButton.css'
import {ReactComponent as HeartIcon} from '../../assets/svg/heart.svg'
import {ReactComponent as HeartIconFull} from '../../assets/svg/heart-full.svg'
import { useState } from 'react';
type FavoriteProps = {
  isFavorite: boolean,
  toggleFavorite: CallableFunction
};

export function FavoriteButton(props:FavoriteProps) {
  // let isFavorite = props.isFavorite;
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  function toggleFavorite(){
    setIsFavorite(!isFavorite);
    props.toggleFavorite()
  }
  return <button 
    className={isFavorite ? "favorite-button favorite-button__on" : "favorite-button"} 
    onClick={()=>toggleFavorite()}>
    {isFavorite? <HeartIconFull/> :<HeartIcon/>}
  </button>
}