import React from "react";
import styles from "./CourseItemInput.module.scss";
import { useState } from "react";

const CourseItemInput = function (props) {
    let [enteredGoal, setEnteredGoal] = useState("");

    function updateInputField(e) {
        setEnteredGoal(e.target.value);
    }

    function addNewGoal(e) {
        e.preventDefault();
        props.onAddNewItem(enteredGoal)

        setEnteredGoal('');
    }
    return (
        <form onSubmit={addNewGoal}>
            <div class={styles["form-control"]}>
                <label for="addGoal">Add Goal</label>
                <input
                    id="addGoal"
                    placeholder="add a new goal"
                    onChange={updateInputField}
                    value={enteredGoal}
                />
            </div>
            <button class={styles.btn}>Add new goal</button>
        </form>
    );
};

export default CourseItemInput;
