import CourseItem from "../CourseItem/CourseItem";
import styles from "./styles/CourseList.module.css";

const CourseList = (props) => {
    return (
        <ul class={styles["goal-list"]}>
            {props.item.map((goal) => {
                return (
                    <CourseItem
                        key={goal.id}
                        id={goal.id}
                        onDeleteItemOnClick={props.onDeleteItem}
                        >
                        {goal.text}
                    </CourseItem>
                );
            })}
        </ul>
    );
};

export default CourseList;
