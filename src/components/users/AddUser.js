import React, { useState } from 'react'
import Card from '../generic/Card'
import Button from '../generic/Button'

import styles from './AddUser.module.css'

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
    };

    const handleAddUser = () => {
        window.alert("You cliked on the button")
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        console.log(enteredUsername, "name")
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        console.log(enteredAge, "age")
    }

    return(
        <div>
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={usernameChangeHandler}/>
                    <label htmlFor="username">Age (Years)</label>
                    <input type="number" id="age" onChange={ageChangeHandler}/>
                    <Button addNewUser={handleAddUser} type={''}>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;