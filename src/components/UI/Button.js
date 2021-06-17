import React from 'react';
import styles from './Button.module.css';

const Button = function (props) {
    return <button onClick={props.click} className={styles.button} type={props.type} onSubmit={props.submit}>
        {props.children}
    </button>
}

export default Button;