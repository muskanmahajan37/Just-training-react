import Wrapper from "../UI/wrapper/Wrapper";
import styles from "./Form.module.css";
import Button from "../UI/button/Button";

import React, { useReducer, useState } from "react";

const Form = function (props) {
    const [isFormValid, setIsFormValid] = useState(false);

    const checkFormValidation = function () {
        if (
            usernameState.isValid &&
            passwordState.isValid &&
            passwordConfirn.isValid &&
            emailState.isValid
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    //username validation
    const [usernameState, dispatchUsernameState] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return {
                    value: action.val,
                    isValid: action.val.trim().length > 5,
                };
            }
            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value.trim().length > 5,
                };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const usernameChangeHandler = function (event) {
        dispatchUsernameState({ type: "USER_INPUT", val: event.target.value });
        checkFormValidation();
    };

    const usernameBlurHandler = function () {
        dispatchUsernameState({ type: "USER_BLUR" });
    };

    //password validation
    const [passwordState, dispatchPasswordState] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return {
                    value: action.val,
                    isValid: action.val.trim().length > 5,
                };
            }
            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value.trim().length > 5,
                };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    function passwordWordChangeHandler(event) {
        dispatchPasswordState({ type: "USER_INPUT", val: event.target.value });
        checkFormValidation();
    }

    function passwordBlurHandler() {
        dispatchPasswordState({ type: "USER_BLUR" });
    }

    //password confirm
    const [passwordConfirn, dispatchPasswordConfirm] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return {
                    value: action.val,
                    isValid: state.value.trim() === passwordState.value,
                };
            }

            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value === passwordState.value,
                };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const passwordConfirmChangeHandler = function (event) {
        dispatchPasswordConfirm({
            type: "USER_INPUT",
            val: event.target.value,
        });
        checkFormValidation();
    };

    const passwordConfirmBlur = function () {
        dispatchPasswordConfirm({ type: "USER_BLUR" });
    };

    //email
    const [emailState, dispatchEmailState] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return {
                    value: action.val,
                    isValid: action.val.trim().includes("@"),
                };
            }

            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value.trim().includes("@"),
                };
            }

            return { valid: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const onEmailChangeHandler = function (event) {
        dispatchEmailState({ type: "USER_INPUT", val: event.target.value });
        checkFormValidation();
    };

    const emailBlurHandler = function () {
        dispatchEmailState({ type: "USER_BLUR" });
    };

    const submitInformations = function () {
        props.onSubmit();
    }

    return (
        <form className={styles.form} onSubmit={submitInformations}>
            <h2>Create account</h2>
            <div
                className={`${styles.form_control} ${
                    usernameState.isValid === false ? styles.invalid : ""
                }`}
            >
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    onChange={usernameChangeHandler}
                    value={usernameState.value}
                    onBlur={usernameBlurHandler}
                />
            </div>
            <div
                className={`${styles.form_control} ${
                    passwordState.isValid === false ? styles.invalid : ""
                }`}
            >
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={passwordState.value}
                    onChange={passwordWordChangeHandler}
                    onBlur={passwordBlurHandler}
                />
            </div>
            <div
                className={`${styles.form_control} ${
                    passwordConfirn.isValid === false ? styles.invalid : ""
                }`}
            >
                <label htmlFor="password2">Password Check</label>
                <input
                    type="password"
                    id="password2"
                    value={passwordConfirn.value}
                    onChange={passwordConfirmChangeHandler}
                    onBlur={passwordConfirmBlur}
                />
            </div>
            <div
                className={`${styles.form_control} ${
                    emailState.isValid === false ? styles.invalid : ""
                }`}
            >
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={onEmailChangeHandler}
                    onBlur={emailBlurHandler}
                />
            </div>
            <Button
                className={`${styles.button} ${
                    isFormValid === false ? styles.disabled : styles.enabled
                }`}
            >
                Submit
            </Button>
        </form>
    );
};

export default Form;
