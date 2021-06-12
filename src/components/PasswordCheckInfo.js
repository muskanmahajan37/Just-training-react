import FormControl from "./FormControl";
import { useState } from "react";

function PasswordCheckInfo() {
    const [passwordCheckInfo, setPasswordCheckInfo] = useState({
        passwordCheckInput: "",
        passwordCheckErrorMessage: "",
        isPasswordCheckValid: true,
    });

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

    return (
        <div>
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
        </div>
    );
}

export default PasswordCheckInfo;
