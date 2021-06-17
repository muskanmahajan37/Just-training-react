import classes from './Button.module.css';
import React from "react";

const Button = (props) => {
    return (
        <button className={`${classes.button} ${props.className}`} type={props.type}>
            {props.children}
        </button>
    );
};

export default Button;
