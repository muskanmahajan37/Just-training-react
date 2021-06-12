import "./Form.css";
import EmailInfo from './EmailInfo'
import UsernameInfo from "./UsernameInfo";
import PasswordInfo from './PasswordInfo';
import PasswordCheckInfo from './PasswordCheckInfo'
import Button from "./Button";

function Form() {


    // function hasWhiteSpace(s) {
    //     return s.indexOf(" ") >= 0;
    // }

    // function hasNumbers(n) {
    //     const number = n.split('')
    //     const booleano = number.map((item) => {
    //         return Number(item);
    //     })
    //     const isValid = booleano.map((valid) => {
    //         if (valid >= 0) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     })
        
    //     return isValid.includes(true);
    // }
       

    
    //password

    function submitHandler(e) {
        e.preventDefault();

        // if (!hasNumbers(passwordInfo.passwordInput)) {
        //     setPasswordInfo((passwordValues) => {
        //         const currentPasswordInfo = {
        //             ...passwordValues,
        //             isPasswordValid: false,
        //             passwordErrorMessage: "must contain at least 2 numbers",
        //         };
        //         return currentPasswordInfo;
        //     });
        // } else if (hasWhiteSpace(passwordInfo.passwordInput) === true) {
        //     setPasswordInfo((passwordValues) => {
        //         const currentPasswordInfo = {
        //             ...passwordValues,
        //             isPasswordValid: false,
        //             passwordErrorMessage: "Remove white space",
        //         };
        //         return currentPasswordInfo;
        //     });
        // } 

        // if (
        //     passwordInfo.passwordInput !== passwordCheckInfo.passwordCheckInput
        // ) {
        //     setPasswordCheckInfo((passwordCheckValue) => {
        //         const currentPasswordCheckInfo = {
        //             ...passwordCheckValue,
        //             isPasswordCheckValid: false,
        //             passwordCheckErrorMessage: "Password doesn't match",
        //         };
        //         return currentPasswordCheckInfo;
        //     });
        // } else {
        //     setPasswordCheckInfo((passwordCheckValue) => {
        //         const currentPasswordCheckInfo = {
        //             ...passwordCheckValue,
        //             isPasswordCheckValid: true,
        //         };
        //         return currentPasswordCheckInfo;
        //     });
        // }
    }

    return (
        <form>
            <h2>Create account</h2> 
            <UsernameInfo></UsernameInfo>
            <EmailInfo></EmailInfo>
            <PasswordInfo></PasswordInfo>
            <PasswordCheckInfo></PasswordCheckInfo>
            

            <Button onClick={submitHandler}>Submit</Button>
        </form>
    );
}

export default Form;
