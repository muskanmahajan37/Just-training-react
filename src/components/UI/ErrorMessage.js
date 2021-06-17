import React from 'react';
import Card from './Card';
import styles from './ErrorMessage.module.css';
import Button from './Button'

const ErrorMessage = function (props) {
    return (
        <Card className={styles.popUp}>
            <header><h2>{ props.title }</h2></header>
            <div className={styles.messages}>{props.message}</div>
            <Button click={props.onCloseModal}>Ok</Button>
        </Card>
    )
}

export default ErrorMessage;