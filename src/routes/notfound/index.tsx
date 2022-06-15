import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import Blobs from "../../components/Blobs";
import style from "./style.scss";

const Notfound: FunctionalComponent = () => {
  return (
    <div class={style.container}>
      <Blobs />
      <div class={style.notfound}>
        <div>
          <h1>Error 404</h1>
          <p>That page doesn't exist.</p>
          <Link href="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
