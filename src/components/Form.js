import { useState } from 'react';
import Button from './Button';
import FormInput from './FormInput'
import './Form.css';

const Form = function () {
    const [usernameInput, setUsernameInput] = useState('');
    const [usernameIsValid, setUsernameIsValid] = useState(true);

    const [passwordInput, setPasswordInput] = useState('');
    const [isPasswordValid, setPasswordValid] = useState(true);

    //usernameCheck
    function onUsername(e) {
        e.preventDefault();
        setUsernameInput(e.target.value.trim());

        if (e.target.value.trim().length > 0) {
            setUsernameIsValid(true);
        }
        setUsernameInput(e.target.value);
        
    }

    //passwordCheck
    function onPassword(e) {
        setPasswordInput(e.target.value.trim());

        if (e.target.value.trim().length > 0) {
            setPasswordValid(true)
        }
        setPasswordInput(e.target.value);
    }


    //onSubmitFunction
    function onSubmitHandler(e) {
        e.preventDefault();
        
        if (usernameInput.trim().length === 0) {
            setUsernameIsValid(false);
        }
        if (passwordInput.trim().length === 0) {
            setPasswordValid(false)
        }
    }

    

    return (
        <form onSubmit={onSubmitHandler}>
            <FormInput></FormInput>
            
            <div className={`formControl ${!isPasswordValid ? 'Invalid' : ''}`}>
                <label for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={onPassword}
                />
            </div>
            <Button>Submit</Button>
        </form>
    )
}

export default Form;