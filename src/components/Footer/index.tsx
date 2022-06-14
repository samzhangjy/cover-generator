import { FunctionalComponent, h } from "preact";
import style from "./style.scss";

const Footer: FunctionalComponent = () => {
  return (
    <div className={style.footer}>
      <h2>Cover Generator</h2>
      <p>
        A work done by{" "}
        <a
          href="https://github.com/samzhangjy"
          target="_blank"
          rel="noreferrer"
        >
          samzhangjy
        </a>
        .
      </p>
      <p>&copy; {new Date().getFullYear()} Sam Zhang.</p>
    </div>
  );
};

export default Footer;
