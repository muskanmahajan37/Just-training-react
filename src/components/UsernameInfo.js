import FormControl from './FormControl'
import { useState } from 'react';
function UsernameInfo() {
    const [usernameInfo, setUsernameInfo] = useState({
        usernameInput: '',
        usernameErrorMessage: '',
        isUsernameValid: true
    })

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
        } /*else if (hasWhiteSpace(usernameInfo.usernameInput) === true) {
            setUsernameInfo((usernameValues) => {
                const currentUsernameValues = {
                    ...usernameValues,
                    usernameErrorMessage: "Remove white space",
                    isUsernameValid: false,
                };
                return currentUsernameValues;
            });
        }*/ else {
            setUsernameInfo((usernameValues) => {
                const currentUsernameInfo = {
                    ...usernameValues,
                    isUsernameValid: true,
                };
                return currentUsernameInfo;
            });
        }
    }

    return (
        <div>
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
        </div>
    )
}

export default UsernameInfo;