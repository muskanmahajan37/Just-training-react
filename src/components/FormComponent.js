import './FormComponent.css';
import Button from './Button';
import { useState } from 'react';
const FormComponent = props => {
    let [userValues, setUserValues] = useState(true)

    let SubmitHandler = function (e) {
        e.preventDefault();
        console.log('ok')
    }

    return (
        <form onClick={ SubmitHandler }>
            <div className="formControl">
                <label style={{color: !userValues ? 'red' : 'black'} } for="firstName"> first Name </label>
                <input type="text" placeholder="digite" id="firstName" onChange={SubmitHandler}
                />
            </div>
            <Button>Enviar</Button>
        </form>
    )
}

export default FormComponent