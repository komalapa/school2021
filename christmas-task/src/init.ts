import data from "./data";
import { Toy } from "./types/toys/toy";

const toys: Toy[] = data.map((item) => new Toy(item));

const initialFavorites = (): Toy[] => {
  const favoritesString = localStorage.getItem("komalapaChristmasFavorites");
  let lsFavorites: Toy[] = [];
  if (favoritesString) lsFavorites = JSON.parse(favoritesString);
  if (lsFavorites) {
    lsFavorites = lsFavorites
      .map((fav: Toy) => toys.find((toy: Toy) => fav.id === toy.id))
      .filter((fav: Toy | undefined) => fav) as Toy[];
    lsFavorites.forEach((toy: Toy) => {
      toy.isFavorite = true;
    });
  }
  return lsFavorites;
};

export { toys, initialFavorites };
