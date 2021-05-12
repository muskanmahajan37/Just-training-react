import styles from "./MovieImage.module.css";
import MovieInformations from "./MovieInformations";

import pedraFilosofal from "./images/pedra.png";
import camaraSecreta from "./images/camara.png";
import prisioneiro from "./images/prisioneiro.jpg";
import calice from "./images/calice.png";
import enigma from "./images/enigma.png";
import fenix from "./images/fenix.png";
import sociedadeDoAnel from "./images/sociedade-do-anel.png";
import asDuasTorres from "./images/as-duas-torres.png";
import retornoDoRei from "./images/retorno-do-rei.png";
import eminem from "./images/eminem.png";
import fightClub from "./images/fightClub.png";
import limitless from "./images/limitless.png";

function MovieImage(props) {
  return (
    <>
      <div className={styles.movieInformations}>
        <div className={styles.movieImages}>
          <div className="overlay"></div>
          <img src={pedraFilosofal} alt="a pedra filosofal" />
        </div>
        <MovieInformations
          name={props.item[0].tituloPrincipal}
          lastName={props.item[0].tituloSecundario}
        />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.movieImages}>
          <img src={camaraSecreta} alt="a camara secreta" />
        </div>
        <MovieInformations
          name={props.item[1].tituloPrincipal}
          lastName={props.item[1].tituloSecundario}
        />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.movieImages}>
          <img src={prisioneiro} alt="prisioneiro de azkabam" />
        </div>
        <MovieInformations
          name={props.item[2].tituloPrincipal}
          lastName={props.item[2].tituloSecundario}
        />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.movieImages}>
          <img src={calice} alt="calife de fogo" />
        </div>
        <MovieInformations
          name={props.item[3].tituloPrincipal}
          lastName={props.item[3].tituloSecundario}
        />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.movieImages}>
          <img src={enigma} alt="enigma do principe" />
        </div>
        <MovieInformations
          name={props.item[4].tituloPrincipal}
          lastName={props.item[4].tituloSecundario}
        />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.movieImages}>
          <img src={fenix} alt="ordem da fenix" />
        </div>
        <MovieInformations
          name={props.item[5].tituloPrincipal}
          lastName={props.item[5].tituloSecundario}
        />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.movieImages}>
          <img src={sociedadeDoAnel} alt="a sociedade do anel" />
        </div>
        <MovieInformations
          name={props.item[6].tituloPrincipal}
          lastName={props.item[6].tituloSecundario}
        />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.movieImages}>
          <img src={asDuasTorres} alt="as duas torres" />
        </div>
        <MovieInformations
          name={props.item[7].tituloPrincipal}
          lastName={props.item[7].tituloSecundario}
        />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.movieImages}>
          <img src={retornoDoRei} alt="retorno do rei" />
        </div>
        <MovieInformations
          name={props.item[8].tituloPrincipal}
          lastName={props.item[8].tituloSecundario}
        />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.movieImages}>
          <img src={eminem} alt="8 mile" />
        </div>
        <MovieInformations
          name={props.item[9].tituloPrincipal}
          lastName={props.item[9].tituloSecundario}
        />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.movieImages}>
          <img src={fightClub} alt="fight club" />
        </div>
        <MovieInformations
          name={props.item[10].tituloPrincipal}
          lastName={props.item[10].tituloSecundario}
        />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.movieImages}>
          <img src={limitless} alt="limitless" />
        </div>
        <MovieInformations
          name={props.item[11].tituloPrincipal}
          lastName={props.item[11].tituloSecundario}
        />
      </div>
    </>
  );
}

export default MovieImage;
