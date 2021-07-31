import styles from "./Header.module.css";

const Header = function (props) {
    const logOutUser = function (e) {
        e.preventDefault();
        props.onLogOut();
    };

    return (
        <header className={styles.header}>
            <h1>A Typical Page</h1>

            {props.isLoged && (
                <ul>
                    <li>
                        <a href="./#">Users</a>
                    </li>
                    <li>
                        <a href="./#">Admin</a>
                    </li>
                    <li>
                        <button onClick={logOutUser}>Log out</button>
                    </li>
                </ul>
            )}
        </header>
    );
};

export default Header;
