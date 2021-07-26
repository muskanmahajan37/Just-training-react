import styles from "./UserList.module.css";
import AddButton from "../addButton/AddButton";

const UserList = function (props) {
    return (
        <ul className={styles.user_list}>
            {props.item.map((acc) => {
                return (
                    <li className={styles.list_item}>
                        <div className={styles.profile}>
                            <div className={styles.picture}>
                                <img src="./user-1.jpg"></img>
                            </div>
                            <span>{acc.nome}</span>
                            <span>{acc.profissao}</span>
                            <span>mora em {acc.municipio}</span>
                        </div>
                        <AddButton />
                    </li>
                );
            })}
        </ul>
    );
};

export default UserList;
