import React, { useState } from 'react';
import Card from '../generic/Card';
import Button from '../generic/Button';

import styles from './AddUser.module.css';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge < 1){
            return
        }
        console.log(enteredUsername, enteredAge)
        setEnteredAge('');
        setEnteredUsername('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return(
        <div>
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={enteredUsername} 
                        onChange={usernameChangeHandler}
                        />
                    <label htmlFor="username">Age (Years)</label>
                    <input 
                        type="number" 
                        id="age" 
                        value={enteredAge} 
                        onChange={ageChangeHandler}
                        />
                    <Button type={''}>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;