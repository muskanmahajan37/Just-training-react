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
    let [enteredValues, setEnteredValues] = useState("");
    const [valid, setValid] = useState(true);

    function deleteItem(goalId) {
        setGoalCollection((prevList) => {
            const previousList = [...prevList];
            return previousList.filter((goal) => goalId !== goal.id);
        });
    }

    function addNewItem() {
        if (enteredValues <= 0) {
            setValid(false);
            return;
        } else {
            setValid(true);
        }
        setGoalCollection((prevList) => {
            return [
                { text: enteredValues, id: Math.random().toString() },
                ...prevList,
            ];
        });
        setEnteredValues('')
    }

    function changeInput(value) {
        setEnteredValues(value);
        enteredValues.trim().length >= 0 && setValid(true)
    }

    return (
        <>
            <div class="wrapper">
                <CourseItemInput
                    onChangeInput={changeInput}
                    onAddNewItem={addNewItem}
                    isValid={valid}
                    value={enteredValues}
                />
            </div>
            <div class="wrapper">
                <CourseList item={goalCollection} onDeleteItem={deleteItem} />
            </div>
        </>
    );
};

export default App;
