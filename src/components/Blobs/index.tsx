import { FunctionalComponent, h } from "preact";
import style from "./style.scss";

const Blobs: FunctionalComponent = () => {
  return (
    <div className={style.blobs}>
      <div className={`${style.blob} ${style.blobOne}`}></div>
      <div className={`${style.blob} ${style.blobTwo}`}></div>
      <div className={`${style.blob} ${style.blobThree}`}></div>
    </div>
  );
};

export default Blobs;
