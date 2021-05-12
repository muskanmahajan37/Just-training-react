import styles from "./MovieInformations.module.css";
import { useState } from "react";

function MovieInformations(props) {
  let [text = "Add to WatchList", changeName] = useState(props.text);
  let [color, changeColor] = useState(props.color);

  function titleHandler() {
    changeName("Added");
    changeColor("rgb(3, 170, 11)");
  }

  return (
    <div className={styles.movieInformation}>
      <p>{props.name}</p>
      <p>{props.lastName}</p>
      <button style={{ background: color }} onClick={titleHandler}>
        {text}
      </button>
    </div>
  );
}

export default MovieInformations;
