import styles from './HomeNavigation.module.css';
import Li from './Li';

const HomeNavigation = () => {
    return (
        <div className={styles.homeNavigation}>
            <nav>
                <ul>
                    <Li img="./logo.png" alt="logo">Página inicial</Li>
                    <Li img="./logo.png" alt="logo">Amigos</Li>
                    <Li img="./logo.png" alt="logo">Watch</Li>
                    <Li img="./logo.png" alt="logo">Markplace</Li>
                    <Li img="./logo.png" alt="logo">Grupos</Li>
                </ul>
            </nav> 
        </div>
    )
}

export default HomeNavigation;