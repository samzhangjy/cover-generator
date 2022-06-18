import { FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import style from "./style.scss";
import { ArrowDownIcon } from "@heroicons/react/solid";
import PreviewCard from "../../components/PreviewCard";
import Blobs from "../../components/Blobs";
import InputOperations from "../../components/InputOperations";
import Footer from "../../components/Footer";

const Home: FunctionalComponent = () => {
  const [coverDetails, setCoverDetails] = useState({
    name: "",
    title: "",
    description: "",
    avatar: "",
  });
  const [avatar, setAvatar] = useState("");
  const scrollToContent = () => {
    document.querySelector("#generate")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  if (typeof window !== "undefined") {
    document.title = "Blog Post Cover Generator";
  }
  return (
    <div>
      <div className={style.heading}>
        <div className={style.headerContainer}>
          <h1 className={style.header}>
            Blog Post
            <br />
            Cover
            <br />
            Generator
          </h1>
          <h1 className={style.mobileHeading}>
            Blog Post Cover Generator
          </h1>
          <img src="/assets/sample.png" className={style.cover} />
          <Blobs />
        </div>
        <p className={style.scrollDown}>
          <ArrowDownIcon
            className={style.scrollDownIcon}
            onClick={scrollToContent}
          />
        </p>
        <div className={style.content} id="generate">
          <h2>Generate your cover.</h2>
          <div className={style.contentContainer}>
            <InputOperations
              coverDetails={coverDetails}
              setCoverDetails={setCoverDetails}
              avatar={avatar}
              setAvatar={setAvatar}
            />
            <PreviewCard coverDetails={coverDetails} avatar={avatar} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
