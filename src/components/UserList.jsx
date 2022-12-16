import React from 'react';

const USERS = ['Fikret', 'Giray', 'Busranur', 'Ayse', 'Dervis'];

function UserList() {
  return (
    <ul>
      {USERS.filter((user) => user != 'Giray').map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

const UserListAlt = () => (
  <ul>
    {USERS.filter((user) => user != 'Giray').map((user, index) => (
      <li key={index}>{user}</li>
    ))}
  </ul>
);

// const UserAlt = () => (<h1>Merhaba</h1>)

export default UserListAlt;
export { USERS };
