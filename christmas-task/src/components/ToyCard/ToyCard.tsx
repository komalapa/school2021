import { useState } from "react";
import { Toy } from "../../types/toys/toy";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
// import '../../main.css'
import './ToyCard.css'

type ToyCardProps = {
  toy: Toy;
};

export function ToyCard(props:ToyCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  let isLiked:boolean = props.toy.favorite;
  function handleToggleFavorite():void {
    isLiked = !isLiked;
    console.log(isLiked)
  }
  const path:string = `/assets/toys/${props.toy.id}.png`
  const image : HTMLImageElement =  new Image();
  image.src = path;
  image.onload = () => setIsLoaded(true);
  return <div className="toy-card">
  <h3 className="toy-card__header">{props.toy.name}</h3>
    {isLoaded ? <img className="toy-card__image" alt="игрушка" src={image.src}/> : <div className="toy-card__image"/>}
    <ul className="toy-card__properties-list">
      <li className="toy-card__properties-list-item"><span className="toy-card__properties-name">Количество:</span> {props.toy.count}шт.</li>
      <li className="toy-card__properties-list-item"><span className="toy-card__properties-name">Год покупки:</span> {props.toy.year}год</li>
      <li className="toy-card__properties-list-item"><span className="toy-card__properties-name">Форма игрушки:</span> {props.toy.shape}</li>
      <li className="toy-card__properties-list-item"><span className="toy-card__properties-name">Цвет:</span> {props.toy.color}</li>
      <li className="toy-card__properties-list-item"><span className="toy-card__properties-name">Размер игрушки:</span> {props.toy.size}</li>
    </ul>
    <FavoriteButton isFavorite={isLiked} toggleFavorite={handleToggleFavorite}/> 
  </div>;
}