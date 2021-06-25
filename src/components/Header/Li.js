import styles from "./Li.module.css";

const Li = (props) => {
    return (
        <div className={styles.menu_wrapper}>
            <li className={styles.list}>{props.children}</li>
            <div className={styles.menu_message}>{ props.message }</div>
        </div>
    );
};

export default Li;
