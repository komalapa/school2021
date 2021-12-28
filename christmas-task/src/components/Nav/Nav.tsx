import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as TreeIcon } from "../../assets/svg/tree.svg";
import "./Nav.css";

export const Nav: FC = () => (
  <nav>
    <ul className="nav">
      <li>
        <Link className="nav__link nav__home" to="/">
          <TreeIcon className="nav__icon" />
        </Link>
      </li>
      <li>
        <Link className="nav__link" to="/toys">
          Игрушки
        </Link>
      </li>
      <li>
        <Link className="nav__link" to="/tree">
          Ёлка
        </Link>
      </li>
    </ul>
  </nav>
);
