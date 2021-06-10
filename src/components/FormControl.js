import ErrorMessages from "./ErrorMessages";
import styled from 'styled-components';

const FormControlWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    position: relative;
    margin-bottom: 15px;

    & label{
        display: inline-block;
        margin-bottom: 5px;
    }

    & input{
        outline: none;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid ${props => (props.valid ? 'red' : '#ccc')};
        background: rgb(247, 235, 235);
    }
`

function FormControl(props) {
    let isValid = props.booleano;

    return (
        <FormControlWrapper valid={!isValid}>
            <label for={props.id}>{props.children}</label>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeHolder}
                onChange={props.onUpdateUsernameInfo}
            ></input>
            <ErrorMessages validation={props.booleano} ErrorMessages={props.outputMessages} />
        </FormControlWrapper>
    );
}

export default FormControl;
