import "./ErrorMessages.css";

function ErrorMessages(props) {
    let isValid = props.validation;

    return (
        <small
            style={{
                visibility: !isValid ? "visible" : "hidden",
                color: !isValid ? "red" : "black",
            }}
        >
            {props.ErrorMessages}
        </small>
    );
}

export default ErrorMessages;
