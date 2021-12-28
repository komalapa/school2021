import { FC } from "react";
import React, { ReactComponent as RSLogo } from "../../assets/svg/rss.svg";

import "./Footer.css";

export const Footer: FC = () => {
  return (
    <footer>
      <a
        className="course-link"
        href="https://rs.school/js/"
        rel="noreferrer"
        target="_blank"
        title="Курс «JavaScript/Front-end»"
      >
        <RSLogo />
      </a>
      <a
        className="github-link"
        href="https://github.com/komalapa"
        target="_blank"
        rel="noreferrer"
      >
        github: komalapa
      </a>
      <span>2021</span>
    </footer>
  );
};
