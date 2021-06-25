import Search from './Search';
import HomeNavigation from './HomeNavigation';
import styles from './Header.module.css';
import User from './User';

const Header = () => {
    return (
        <header className={styles.header}>
            <Search />
            <HomeNavigation />
            <User></User>
        </header>
    )
}

export default Header