import styles from './MovieImage.module.css';
import MovieInformations from './MovieInformations';

import pedraFilosofal from './images/pedra.jpg';
import camaraSecreta from './images/camara.jpg';
import prisioneiro from './images/prisioneiro.jpg';
import calice from './images/calice.jpg';
import enigma from './images/enigma.jpg';
import fenix from './images/fenix.jpg';

function MovieImage(props) {
    return (
        <>
            <div className={styles.movieInformations}>
                <div className={styles.movieImages}>
                    <img src={pedraFilosofal} alt="a pedra filosofal"/>
                </div>
                <MovieInformations
                    name={props.item[0].tituloPrincipal}
                    lastName={props.item[0].tituloSecundario}
                />
            </div>

            <div className={styles.movieInformations}>
                <div className={styles.movieImages}>
                    <img src={camaraSecreta} alt="a camara secreta"/>
                </div>
                <MovieInformations
                    name={props.item[1].tituloPrincipal}
                    lastName={props.item[1].tituloSecundario}
                />
            </div>

            <div className={styles.movieInformations}>
                <div className={styles.movieImages}>
                    <img src={prisioneiro} alt="prisioneiro de azkabam"/>
                </div>
                <MovieInformations
                    name={props.item[2].tituloPrincipal}
                    lastName={props.item[2].tituloSecundario}
                />
            </div>

            <div className={styles.movieInformations}>
                <div className={styles.movieImages}>
                    <img src={calice} alt="calife de fogo"/>
                </div>
                <MovieInformations
                    name={props.item[3].tituloPrincipal}
                    lastName={props.item[3].tituloSecundario}
                />
            </div>

            <div className={styles.movieInformations}>
                <div className={styles.movieImages}>
                    <img src={enigma} alt="enigma do principe"/>
                </div>
                <MovieInformations
                    name={props.item[4].tituloPrincipal}
                    lastName={props.item[4].tituloSecundario}
                />
            </div>

            <div className={styles.movieInformations}>
                <div className={styles.movieImages}>
                    <img src={fenix} alt="ordem da fenix"/>
                </div>
                <MovieInformations
                    name={props.item[5].tituloPrincipal}
                    lastName={props.item[5].tituloSecundario}
                />
            </div>
        </>
        
    );
}

export default MovieImage;