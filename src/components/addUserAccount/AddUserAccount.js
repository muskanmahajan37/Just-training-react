import { useState } from "react";
import "./styles/AddUserAccount.css";
import PopUp from "../popUp/PopUp";

const AddUserAccount = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    // const [userList, setUserList] = useState(userAccount)
    const [usernameValid, setUsernameValid] = useState(true);
    const [ageValid, setAgeValid] = useState(true);
    const [popUp, setPopUp] = useState();
    const [errorMessagem, setErrorMessage] = useState({
        header: "mensagem",
        footer: "mensagem",
    });

    const updateEnteredUsername = function (e) {
        setEnteredUsername(e.target.value);
        if (enteredUsername.length > 0) {
            setUsernameValid(true);
        }
    };

    const updateEnteredAge = function (e) {
        setEnteredAge(e.target.value);
        if (enteredAge.length > 0) {
            setAgeValid(true);
        }
    };

    const submitUserInformations = (e) => {
        e.preventDefault();

        if (enteredUsername.length === 0) {
            setUsernameValid(false);
            setErrorMessage((error) => {
                const currentError = error;
                currentError.header = "Username cannot be blank";
                currentError.footer = "Please enter a valid username";
                return currentError;
            });
        }
        if (enteredAge.length <= 0) {
            setAgeValid(false);
            setErrorMessage((error) => {
                const currentError = error;
                currentError.header = "Invalid age";
                currentError.footer = "Please enter a valid age";
                return currentError;
            });
        }

        if (enteredUsername.length === 0 || enteredAge.length === 0) {
            setPopUp(true);
            return;
        }
        props.onSendInformations(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    };

    const closeModal = function (e) {
        e.preventDefault();
        setPopUp(null);
    };

    return (
        <>
            {popUp && (
                <PopUp
                    onCloseModal={closeModal}
                    header={errorMessagem.header}
                    footer={errorMessagem.footer}
                />
            )}
            <form onSubmit={submitUserInformations}>
                <div class={`form_control ${!usernameValid ? "invalid" : ""}`}>
                    <label for="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        onChange={updateEnteredUsername}
                        value={enteredUsername}
                    />
                </div>
                <div class={`form_control ${!ageValid ? "invalid" : ""}`}>
                    <label for="age">Age</label>
                    <input
                        id="age"
                        type="number"
                        onChange={updateEnteredAge}
                        value={enteredAge}
                    />
                </div>
                <button class="btn">Add new account</button>
            </form>
        </>
    );
};

export default AddUserAccount;
