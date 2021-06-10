import "./Form.css";
import FormControl from "./FormControl";
import {useState} from 'react';
import Button from "./Button";

function Form() {
    const [usernameInfo, setUsernameInfo] = useState({
        usernameInput: '',
        usernameErrorMessage: 'ss',
        isUsernameValid: true
    })



    function updateUsernameInfo(e) {
        console.log(e.target.value)

        e.preventDefault();
        setUsernameInfo((usernameValues) => {
            const currentUsernameInfo = {
                ...usernameValues,
                usernameInput: e.target.value,
            }
            return currentUsernameInfo;
        })

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
                placeHolder="Username"
                outputMessages={usernameInfo.usernameErrorMessage}
                onChangeHandler={updateUsernameInfo}
            >
                Username
            </FormControl>

            <FormControl
                id="email"
                type="email"
                name="email"
                placeHolder="example@gmail.com"
                outputMessages="haha"
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

            <Button onSubmitHandler={submitHandler}>Submit</Button>
        </form>
    );
}

export default Form;
