import styles from './Search.module.css';

const Search = () => {
    return (
        <div className={styles.search}>
            <img src="./logo.png" alt="logo"></img>
            <input type="search" placeholder="Pesquisar no Facebook"></input>
        </div>
    );
};

export default Search;
