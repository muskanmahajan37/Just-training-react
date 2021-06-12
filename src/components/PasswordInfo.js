import FormControl from "./FormControl";
import { useState } from "react";

function PasswordInfo() {
    const [passwordInfo, setPasswordInfo] = useState({
        passwordInput: "",
        passwordErrorMessage: "",
        isPasswordValid: true,
    });

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

    return (
        <div>
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
        </div>
    )
}

export default PasswordInfo;