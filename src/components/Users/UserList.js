import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = function (props) {
    return (
        <Card className={styles.userlist}>
            <ul>
                {props.users.map((user) => {
                    return (
                        <li>
                            <div className={styles.userbox}>
                                <span>nome: </span> {user.name}
                            </div>
                            <div className={styles.userbox}>
                                <span>Idade</span>
                                {user.age}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </Card>
    );
};

export default UserList;
