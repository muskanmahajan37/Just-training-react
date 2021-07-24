import React from "react";
import styles from "./styles/CourseItemInput.module.css";

const CourseItemInput = function (props) {
    let validation = props.isValid;

    function updateInputField(e) {
        props.onChangeInput(e.target.value)
    }

    function addNewGoal(e) {
        e.preventDefault();
        props.onAddNewItem();
    }

    return (
        <form onSubmit={addNewGoal}>
            <div class={styles["form-control"]}>
                <label
                    for="addGoal"
                    style={{ color: !validation ? "red" : "black" }}
                >
                    Add Goal
                </label>
                <input
                    id="addGoal"
                    placeholder="add a new goal"
                    onChange={updateInputField}
                    style={{ borderColor: !validation ? 'red' : '#ccc' }}
                    value={props.value}
                />
            </div>
            <button class={styles.btn}>Add new goal</button>
        </form>
    );
};

export default CourseItemInput;
