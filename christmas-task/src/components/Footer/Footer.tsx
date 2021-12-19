import "./Footer.css";
import { ReactComponent as RSLogo } from "../../assets/svg/rss.svg";

export function Footer() {
  return (
    <footer>
      <a
        className="course-link"
        href="https://rs.school/js/"
        target="_blank"
        title="Курс «JavaScript/Front-end»"
      >
        <RSLogo />
      </a>
      <a
        className="github-link"
        href="https://github.com/komalapa"
        target="_blank"
      >
        github: komalapa
      </a>
      <span>2021</span>
    </footer>
  );
}
