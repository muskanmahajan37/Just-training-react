import "./Form.css";
import FormControl from "./FormControl";
import Button from "./Button";

function Form() {
    return (
        <form>
            <h2>Create account</h2>
            <FormControl
                id="username"
                type="text"
                name="username"
                placeHolder="Username"
                outputMessages="cu"
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

            <Button>Submit</Button>
        </form>
    );
}

export default Form;
