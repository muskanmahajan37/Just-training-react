import CourseItemInput from "./components/courseItemInput/CourseItemInput";
import CourseList from "./components/CourseList/CourseList";
import React, { useState } from "react";

const goalList = [
    { text: "clean the bathroom", id: "n1" },
    { text: "clean the bathroom", id: "n2" },
    { text: "clean the bathroom", id: "n3" },
    { text: "clean the bathroom", id: "n4" },
    { text: "clean the bathroom", id: "n5" },
];

const App = () => {
    const [goalCollection, setGoalCollection] = useState(goalList);

    function deleteItem(goalId) {
        setGoalCollection((prevList) => {
            const previousList = [...prevList];
            return previousList.filter(goal => goalId !== goal.id);
        });
    }

    function addNewItem(enteredGoal) {
        setGoalCollection((prevList) => {
            return [{text: enteredGoal, id: Math.random().toString()}, ...prevList];
        });
    }

    return (
        <>
            <div class="wrapper">
                <CourseItemInput onAddNewItem={addNewItem} />
            </div>
            <div class="wrapper">
                <CourseList item={goalCollection} onDeleteItem={deleteItem} />
            </div>
        </>
    );
};

export default App;
