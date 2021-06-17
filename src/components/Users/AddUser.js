import React, { useState } from "react";
import styles from "./AddUser.module.css";
import ErrorMessage from "../UI/ErrorMessage";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = function (props) {
    const [nameInput, setNameInput] = useState("");
    const [ageInput, setAgeInput] = useState("");
    const [error, setError] = useState();
    function onNameChange(e) {
        setNameInput(e.target.value);
    }

    function onAgeChange(e) {
        setAgeInput(e.target.value);
    }

    function formSubmitHandler(e) {
        e.preventDefault();

        if (nameInput.lenght === 0 || ageInput.length === 0) {
            setError({
                title: "input valid",
                message: "please use a valid input",
            });
            return;
        }
        if (+ageInput < 1) {
            setError({
                title: "invalid age",
                message: "please enter a age greater than 0",
            });
            return;
        }

        props.onAddUser(nameInput, ageInput);
        setNameInput("");
        setAgeInput("");
    }

    function closeModal() {
        setError(null)
    }


    return (
        <div>
            {error && (
                <>
                    <div className={styles.overlay} />
                    <ErrorMessage onCloseModal={closeModal} title={error.title} message={ error.message }/>
                </>
            )}
            <Card className={styles.input}>
                <form onSubmit={formSubmitHandler}>
                    <div className={styles["form-control"]}>
                        <label for="username">Username</label>
                        <input
                            onChange={onNameChange}
                            type="text"
                            id="username"
                            name="username"
                            value={nameInput}
                        />
                    </div>
                    <div className={styles["form-control"]}>
                        <label for="age">age</label>
                        <input
                            onChange={onAgeChange}
                            type="number"
                            id="age"
                            name="age"
                            value={ageInput}
                        />
                    </div>
                    <Button>Send</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
