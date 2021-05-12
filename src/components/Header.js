import styles from './Header.module.css';
import icon from './images/icon.png';

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img src={icon} alt="icone do filme"></img>
            </div>
            
            <input type="text" placeholder="Search"/> 
        </header>
    )
}

export default Header;