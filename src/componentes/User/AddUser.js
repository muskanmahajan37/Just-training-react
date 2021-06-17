import React, { useState } from "react";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = function () {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState()

    function usernameChangeHandler(e) {
        setEnteredUsername(e.target.value);
    }

    function ageChangeHandler(e) {
        setEnteredAge(e.target.value);
    }

    return (
        <Card className={classes.input}>
            <form>
                <div className={classes["form-control"]}>
                    <label for="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />
                </div>
                <div className={classes["form-control"]}>
                    <label for="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                </div>
                <Button className={classes.buttonInside} onClick>
                    Submit
                </Button>
            </form>
        </Card>
    );
};

export default AddUser;
