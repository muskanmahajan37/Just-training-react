import styles from "./styles/CourseItem.module.css";

const CourseItem = (props) => {
    function deleteItemOnClick() {
        props.onDeleteItemOnClick(props.id);
    }

    return (
        <li class={styles["list-item"]} onClick={deleteItemOnClick}>
            {props.children}
        </li>
    );
};

export default CourseItem;
