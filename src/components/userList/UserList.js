import styles from "./styles/Userlist.css";

const UserList = (props) => {
    return (
        <ul class="list_wrapper">
            {props.item.map((acc) => {
                return (
                    <li class="list_item">
                        <div>
                            <span>Nome</span>: {acc.text}
                        </div>
                        <div>
                            <span>Idade</span>: {acc.age}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default UserList;
