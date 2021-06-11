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
        emailInput: "",
        emailErrorMessage: "",
        isEmailValid: true,
    });

    const [passwordInfo, setPasswordInfo] = useState({
        passwordInput: "",
        passwordErrorMessage: "",
        isPasswordValid: true,
    });

    const [passwordCheckInfo, setPasswordCheckInfo] = useState({
        passwordCheckInput: "",
        passwordCheckErrorMessage: "",
        isPasswordCheckValid: true,
    });

    function hasWhiteSpace(s) {
        return s.indexOf(" ") >= 0;
    }

    function hasNumbers(n) {
        const number = n.split('')
        const booleano = number.map((item) => {
            return Number(item);
        })
        const isValid = booleano.map((valid) => {
            if (valid >= 0) {
                return true
            } else {
                return false
            }
        })
        
        return isValid.includes(true);
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
        e.preventDefault();

        setEmailInfo((emailValues) => {
            const currentEmailInfo = {
                ...emailValues,
                emailInput: e.target.value,
            };
            return currentEmailInfo;
        });

        if (emailInfo.emailInput.length <= 5) {
            setEmailInfo((emailValues) => {
                const currentEmailInfo = {
                    ...emailValues,
                    isEmailValid: false,
                    emailErrorMessage: "invalid E-mail address",
                };
                return currentEmailInfo;
            });
        } else {
            setEmailInfo((emailValues) => {
                const currentEmailInfo = {
                    ...emailValues,
                    isEmailValid: true,
                };
                return currentEmailInfo;
            });
        }
    }
    //password
    function onPassword(e) {
        e.preventDefault();
        setPasswordInfo((passwordValues) => {
            const currentPasswordInfo = {
                ...passwordValues,
                passwordInput: e.target.value,
            };
            return currentPasswordInfo;
        });

        if (passwordInfo.passwordInput.length <= 5) {
            setPasswordInfo((passwordValues) => {
                const currentPasswordInfo = {
                    ...passwordValues,
                    isPasswordValid: false,
                    passwordErrorMessage: "Weak Password",
                };
                return currentPasswordInfo;
            });
        } else {
            setPasswordInfo((passwordValues) => {
                const currentPasswordInfo = {
                    ...passwordValues,
                    isPasswordValid: true,
                };
                return currentPasswordInfo;
            });
        }
    }

    function onPasswordCheck(e) {
        e.preventDefault();

        setPasswordCheckInfo((passwordCheckvalue) => {
            const currentPasswordCheck = {
                ...passwordCheckvalue,
                passwordCheckInput: e.target.value,
            };
            return currentPasswordCheck;
        });
    }

    function submitHandler(e) {
        e.preventDefault();

        if (!hasNumbers(passwordInfo.passwordInput)) {
            setPasswordInfo((passwordValues) => {
                const currentPasswordInfo = {
                    ...passwordValues,
                    isPasswordValid: false,
                    passwordErrorMessage: "must contain at least 2 numbers",
                };
                return currentPasswordInfo;
            });
        } else if (hasWhiteSpace(passwordInfo.passwordInput) === true) {
            setPasswordInfo((passwordValues) => {
                const currentPasswordInfo = {
                    ...passwordValues,
                    isPasswordValid: false,
                    passwordErrorMessage: "Remove white space",
                };
                return currentPasswordInfo;
            });
        } 

        if (
            passwordInfo.passwordInput !== passwordCheckInfo.passwordCheckInput
        ) {
            setPasswordCheckInfo((passwordCheckValue) => {
                const currentPasswordCheckInfo = {
                    ...passwordCheckValue,
                    isPasswordCheckValid: false,
                    passwordCheckErrorMessage: "Password doesn't match",
                };
                return currentPasswordCheckInfo;
            });
        } else {
            setPasswordCheckInfo((passwordCheckValue) => {
                const currentPasswordCheckInfo = {
                    ...passwordCheckValue,
                    isPasswordCheckValid: true,
                };
                return currentPasswordCheckInfo;
            });
        }
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
                booleano={passwordInfo.isPasswordValid}
                name="password"
                placeHolder="password"
                outputMessages={passwordInfo.passwordErrorMessage}
                onChange={onPassword}
            >
                Password
            </FormControl>

            <FormControl
                id="passwordCheck"
                type="password"
                name="passwordCheck"
                booleano={passwordCheckInfo.isPasswordCheckValid}
                placeHolder="confirm password"
                onChange={onPasswordCheck}
                outputMessages={passwordCheckInfo.passwordCheckErrorMessage}
            >
                Password check
            </FormControl>

            <Button onClick={submitHandler}>Submit</Button>
        </form>
    );
}

export default Form;
