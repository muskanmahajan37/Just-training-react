import "./FormControl.css";
import ErrorMessages from "./ErrorMessages";

function FormControl(props) {
    let isValid = props.booleano;

    return (
        <div className="form-control">
            <label for={props.id}>{props.children}</label>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeHolder}
                onChange={props.onUpdateUsernameInfo}
                style={
                    {
                        borderColor: !isValid ? "red" : "black",
                        backgroundColor: !isValid ? 'rgb(247, 235, 235)' : 'white'
                    }
                }
            ></input>
            <ErrorMessages validation={props.booleano} ErrorMessages={props.outputMessages} />
        </div>
    );
}

export default FormControl;
