import "./Form.css";
import FormControl from "./FormControl";
import { useState } from "react";
import Button from "./Button";

function Form() {
    const [usernameInfo, setUsernameInfo] = useState({
        usernameInput: "",
        usernameErrorMessage: "",
        isUsernameValid: true,
    });

    const [emailInfo, setEmailInfo] = useState({
        emailInput: '',
        emailErrorMessage: '',
        isEmailValid: true
    })

    function hasWhiteSpace(s) {
        return s.indexOf(" ") >= 0;
    }

    function onUsernameInfo(e) {
        e.preventDefault();

        setUsernameInfo((usernameValues) => {
            const currentUsernameInfo = {
                ...usernameValues,
                usernameInput: e.target.value,
            };
            return currentUsernameInfo;
        });

        if (usernameInfo.usernameInput.trim().length <= 5) {
            setUsernameInfo((usernameValues) => {
                const currentUsernameInfo = {
                    ...usernameValues,
                    usernameErrorMessage: "Short username",
                    isUsernameValid: false,
                };
                return currentUsernameInfo;
            });
        } else if (hasWhiteSpace(usernameInfo.usernameInput) === true) {
            setUsernameInfo((usernameValues) => {
                const currentUsernameValues = {
                    ...usernameValues,
                    usernameErrorMessage: "Remove white space",
                    isUsernameValid: false,
                };
                return currentUsernameValues;
            });
        } else {
            setUsernameInfo((usernameValues) => {
                const currentUsernameInfo = {
                    ...usernameValues,
                    isUsernameValid: true,
                };
                return currentUsernameInfo;
            });
        }
    }

    function onEmailInfo(e) {
        e.preventDefault()

        setEmailInfo((emailValues) => {
            const currentEmailInfo = {
                ...emailValues,
                emailInput: e.target.value
            }
            return currentEmailInfo;
        })

        if (emailInfo.emailInput.length <= 5) {
            setEmailInfo((emailValues) => {
                const currentEmailInfo = {
                    ...emailValues,
                    isEmailValid: false,
                    emailErrorMessage: 'invalid E-mail address'
                }
                return currentEmailInfo;
            })
        } else {
            setEmailInfo((emailValues) => {
                const currentEmailInfo = {
                    ...emailValues,
                    isEmailValid: true
                }
                return currentEmailInfo;
            })
        }

    }

    function submitHandler(e) {
        e.preventDefault();
    }

    return (
        <form>
            <h2>Create account</h2>
            <FormControl
                id="username"
                type="text"
                name="username"
                booleano={usernameInfo.isUsernameValid}
                placeHolder="Username"
                outputMessages={usernameInfo.usernameErrorMessage}
                onChange={onUsernameInfo}
            >
                Username
            </FormControl>

            <FormControl
                id="email"
                type="email"
                name="email"
                booleano={emailInfo.isEmailValid}
                placeHolder="example@gmail.com"
                outputMessages={emailInfo.emailErrorMessage}
                onChange={onEmailInfo}
            >
                E-mail
            </FormControl>

            <FormControl
                id="password"
                type="password"
                name="password"
                placeHolder="password"
                outputMessages="password"
            >
                Password
            </FormControl>

            <FormControl
                id="passwordCheck"
                type="password"
                name="passwordCheck"
                placeHolder="confirm password"
                outputMessages="passwordCheck"
            >
                Password check
            </FormControl>

            <Button onClick={submitHandler}>Submit</Button>
        </form>
    );
}

export default Form;
