function FormInput(props) {
    return (
        <div className={`formControl ${!usernameIsValid ? 'Invalid' : ''}`}>
                <label for="username">Username</label>
                <input
                    type={props.type}
                    id="username"
                    onChange={onUsername}
                />
        </div>
    )
}
export default FormInput;