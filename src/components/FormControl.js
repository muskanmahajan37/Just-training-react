import "./FormControl.css";
import ErrorMessages from "./ErrorMessages";

function FormControl(props) {
    return (
        <div className="form-control">
            <label for={props.id}>{props.children}</label>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeHolder}
                onChange={props.onUpdateUsernameInfo}
            ></input>
            <ErrorMessages ErrorMessages={props.outputMessages}/>
        </div>
    );
}

export default FormControl;
