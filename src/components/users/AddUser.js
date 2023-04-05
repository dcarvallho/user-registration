import React from 'react'
import Card from '../generic/Card'

import styles from './AddUser.module.css'

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return(
        <div>
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                    <label htmlFor="username">Age (Years)</label>
                    <input type="number" id="username" />
                    <button type="submit">Add User</button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;