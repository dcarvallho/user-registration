import React, { useState } from 'react';
import './index.css';

import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      console.log(prevUsersList, "prev list of user")
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() },];
    });
  };

  return (
    <>
      <h1>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList
          users={[usersList]}
        />
      </h1>
    </>
  );
};

export default App;