import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Wrapper from "./components/UI/wrapper/Wrapper";
import Form from "./components/form/Form";

const App = () => {
    const [formIsValid, setFormIsValid] = useState(false);

    const submit = function () {
        setFormIsValid(true);

        localStorage.setItem("user", "victor");
    };

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user === "victor") {
            setFormIsValid(true);
        }
    }, []);

    const onLogOut = function () {
        localStorage.removeItem("user");
        setFormIsValid(false);
    };

    return (
        <React.Fragment>
            <Header displayMenu={formIsValid} onLogOut={onLogOut} />
            <Wrapper className="form_wrapper">
                {formIsValid === false ? (
                    <Form onSubmit={submit} />
                ) : (
                    <h1>Welcome</h1>
                )}
            </Wrapper>
        </React.Fragment>
    );
};

export default App;
