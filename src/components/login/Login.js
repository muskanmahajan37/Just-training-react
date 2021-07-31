import { useReducer, useState } from "react";
import styles from "./Login.module.css";

const Login = (props) => {
    //email validation
    const [emailState, dispatchEmail] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return { value: action.val, isValid: action.val.includes("@") };
            }

            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value.includes("@"),
                };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const emailChangeHandler = function (event) {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });
        props.onSetFormValidationEmail(
            emailState.isValid && passwordState.isValid
        );
    };

    const emailBlurHandler = function () {
        dispatchEmail({ type: "USER_BLUR" });
    };

    //password validation
    const [passwordState, dispatchPasswordState] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return {
                    value: action.val,
                    isValid: action.val.trim().length > 6,
                };
            }

            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value.trim().length > 6,
                };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const passwordChangeHandler = function (event) {
        dispatchPasswordState({ type: "USER_INPUT", val: event.target.value });
        props.onSetFormValidationPassword(
            emailState.isValid && passwordState.isValid
        );
    };

    const passwordBlurHandler = function () {
        dispatchPasswordState({ type: "USER_BLUR" });
    };

    const submitHandler = function (e) {
        e.preventDefault();
        props.onSubmitHandler(emailState.isValid, passwordState.isValid);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.form_control}>
                <label htmlFor="email">E-Mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    style={{
                        borderColor:
                            emailState.isValid === false ? "red" : "#ccc",
                    }}
                />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                    style={{
                        borderColor:
                            passwordState.isValid === false ? "red" : "#ccc",
                    }}
                />
            </div>

            <button
                className={`${styles["btn_submit"]} ${
                    props.isValid ? styles["invalid"] : styles["valid"]
                }`}
            >
                Login
            </button>
        </form>
    );
};

export default Login;
