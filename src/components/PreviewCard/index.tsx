import { FunctionalComponent, h } from "preact";
import html2canvas from "html2canvas";
import style from "./style.scss";
import { coverDetailsKey } from "../InputOperations";
import config from "../../config";

export interface PreviewCardProps {
  coverDetails: Record<coverDetailsKey, string>;
  avatar: string;
}

const PreviewCard: FunctionalComponent<PreviewCardProps> = ({
  coverDetails,
  avatar,
}) => {
  const getSplittedDescription = (description: string) => {
    const split = description.split("\n");
    const result = split.map((line) => {
      return <p>{line}</p>;
    });
    return result;
  };

  const takeScreenshot = async () => {
    const canvas = await html2canvas(
      document.querySelector("#preview") as HTMLElement,
      {
        backgroundColor: null,
      }
    );
    const link = document.querySelector("#download-cover") as HTMLAnchorElement;
    link.setAttribute("href", canvas.toDataURL("image/png"));
    link.click();
  };

  return (
    <div className={style.preview}>
      <h1>Preview</h1>
      <div className={style.previewCard} id="preview">
        <h3>{coverDetails.title || config.defaults.title}</h3>
        <div>
          {getSplittedDescription(
            coverDetails.description || config.defaults.description
          )}
        </div>
        <div className={style.authorContainer}>
          <img
            src={avatar || config.defaults.avatar}
            className={style.avatar}
          />
          <span className={style.authorBy}>By&nbsp;</span>
          <span className={style.author}>
            {coverDetails.name || config.defaults.name}
          </span>
        </div>
      </div>
      <button onClick={() => takeScreenshot()} className={style.downloadButton}>
        Download
      </button>
      <a id="download-cover" download="cover.png"></a>
    </div>
  );
};

export default PreviewCard;
