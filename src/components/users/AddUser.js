import React from 'react'

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return(
        <div>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="username">Age (Years)</label>
                <input type="number" id="username" />
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}

export default AddUser;