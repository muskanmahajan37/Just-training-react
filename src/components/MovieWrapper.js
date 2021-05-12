import styles from './MovieWrapper.module.css';
import MovieImage from './MovieImage';

function MovieWrapper() {

    const harryPotter = [
        {
            tituloPrincipal: 'Harry potter',
            tituloSecundario: 'E a pedra filosofal'
        },
        {
            tituloPrincipal: 'Harry potter',
            tituloSecundario: 'E a câmara secreta'
        },
        {
            tituloPrincipal: 'Harry potter',
            tituloSecundario: 'prisioneiro de Azkaban'
        },
        {
            tituloPrincipal: 'Harry potter',
            tituloSecundario: 'E o Cálice de fogo'
        },
        {
            tituloPrincipal: 'Harry potter',
            tituloSecundario: 'E o Enigma do principe'
        },
        {
            tituloPrincipal: 'Harry potter',
            tituloSecundario: 'E a ordem da fenix'
        },
    ]

    return (
        <div className={styles.movieWrapper}>
            <div className={styles.movieWrapper__inside}>

                <MovieImage item={harryPotter}></MovieImage>

            </div>
        </div>
    );
}

export default MovieWrapper;