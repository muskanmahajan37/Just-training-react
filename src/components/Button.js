import "./Button.css";

function Button(props) {
    return (
        <button onClick={props.onSubmitHandler}>{props.children}</button>
    );
}

export default Button;
