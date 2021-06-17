import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button'

const AddUser = function () {
    return (
        <Card className={classes.input}>
            <form>
                <div className={classes['form-control']}>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username"/>
                </div>
                <div className={classes['form-control']}>
                    <label for="age">Age</label>
                    <input type="number" name="age" id="age"/>
                </div>
                <Button>Submit</Button>
            </form>
        </Card>
    )
}

export default AddUser;