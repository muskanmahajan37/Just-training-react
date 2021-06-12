import FormControl from "./FormControl";
import {useState} from 'react'

function EmailInfo() {
    const [emailInfo, setEmailInfo] = useState({
        emailInput: "",
        emailErrorMessage: "",
        isEmailValid: true
    });

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

    return (
        <div>
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
        </div>
    );
}

export default EmailInfo;
