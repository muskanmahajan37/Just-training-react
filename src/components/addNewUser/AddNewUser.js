import styles from "./AddNewUser.module.css";

const AddNewUser = (props) => {
    return (
        <form className={styles.form} onSubmit={props.onSubmit}>
            <div className={styles.form_control}>
                <label for="username">Username</label>
                <input type="text" id="username" onChange={props.onChangeUsername} />
            </div>
            <div className={styles.form_control}>
                <label for="username">profissão</label>
                <input type="text" id="username"onChange={props.onChangeProfissao} />
            </div>
            <div className={styles.form_control}>
                <label for="municipio">Municipio</label>
                <input type="text" id="municipio"onChange={props.onChangeMunicio} />
            </div>
            <button className={styles.createAcc} >Create account</button>
        </form>
    );
};

export default AddNewUser;
