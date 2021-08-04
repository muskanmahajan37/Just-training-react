import styles from "./Header.module.css";

const Header = function (props) {

    const logout = function () {
        props.onLogOut();
    }

    return (
        <header className={styles.header}>
            <h1>Start a new journey</h1>
            {props.displayMenu && (
                <ul>
                    <li>
                        <a href="./#">Users</a>
                    </li>
                    <li>
                        <a href="./#">Posts</a>
                    </li>
                    <li>
                        <a href="./#">pictures</a>
                    </li>
                    <li>
                        <button onClick={logout}>Logut</button>
                    </li>
                </ul>
            )}
        </header>
    );
};

export default Header;
