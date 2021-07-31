import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Login from "./components/login/Login";

const App = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [isLoged, setIsLoged] = useState(false);
    const setFormValidation = function (validation) {
        setFormIsValid(validation);
    };

    const submitHandler = function () {
        localStorage.setItem("name", "victor");
        setIsLoged(true);
    };

    useEffect(() => {
        const user = localStorage.getItem("name");
        if (user === "victor") {
            setIsLoged(true);
        }
    }, []);

    const logOut = function () {
        localStorage.removeItem("name");
        setIsLoged(false);
    };

    return (
        <React.Fragment>
            <Header isLoged={isLoged} onLogOut={logOut} />
            <div className="login_wrapper">
                {isLoged === false ? (
                    <Login
                        onSetFormValidationEmail={setFormValidation}
                        onSetFormValidationPassword={setFormValidation}
                        onSubmitHandler={submitHandler}
                        isValid={!formIsValid}
                    />
                ) : (
                    <h1>hello world</h1>
                )}
            </div>
        </React.Fragment>
    );
};

export default App;
