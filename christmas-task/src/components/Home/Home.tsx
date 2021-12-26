import { FC } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import "./Home.css";
export const Home: FC = () => (
  <div className="home">
    <h1 className="home__title">Бабушкины ёлочные игрушки</h1>
    <Link to="/toys" className="home__button">
      Начать игру!
    </Link>
    <Footer />
  </div>
);
