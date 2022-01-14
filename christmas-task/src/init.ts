import data from "./data";
import { Toy } from "./types/toys/toy";

const toys: Toy[] = data.map((item) => new Toy(item));

const initialFavorites = () => {
  const favoritesString = localStorage.getItem("komalapaChristmasFavorites");
  let lsFavorites;
  if (favoritesString) lsFavorites = JSON.parse(favoritesString);
  if (lsFavorites) {
    lsFavorites = lsFavorites
      .filter((toy: Toy) => toy)
      .map((fav: Toy) => toys.find((toy: Toy) => fav.id === toy.id));
    lsFavorites.forEach((toy: Toy) => {
      toy.isFavorite = true;
    });
    return lsFavorites;
  }
  return [];
};

export { toys, initialFavorites };
