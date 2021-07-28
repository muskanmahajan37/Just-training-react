import React, { useState, useEffect } from "react";
import Login from "./components/login/Login";
let x = 0;
const App = () => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [isValid, setIsValid] = useState(false);

    const nameChange = function (e) {
        setEnteredUsername(e.target.value);
    };

    const passwordChange = function (e) {
        setEnteredPassword(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("inside the timer");
            setIsValid(
                enteredUsername.trim().length > 10 &&
                    enteredPassword.trim().length > 10
            );
        }, 500);

        return () => {;
            clearTimeout(timer);
        };
    }, [enteredUsername, enteredPassword]);

    return (
        <React.Fragment>
            {!isValid && (
                <Login
                    onNameChange={nameChange}
                    onChangePassword={passwordChange}
                />
            )}
            {isValid && <h1>hello world</h1>}
        </React.Fragment>
    );
};

export default App;
