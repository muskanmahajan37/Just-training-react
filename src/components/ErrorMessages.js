import './ErrorMessages.css';

function ErrorMessages(props) {
    return (
        <small>
            {props.ErrorMessages}
        </small>
    )
}

export default ErrorMessages;