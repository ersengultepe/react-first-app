import React, { useState } from 'react';

import GisUsers, { USERS as Kullanicilar } from './components/UserList';
import './style.css';

const hello = 'Merhaba JSX';

export default function App() {
  const info = 'Deneme';
  const secondClass = 'second-class';
  const PInfo = `<p>${info}</p>`;

  const classInfo = `deneme ${secondClass}`;

  const liUsers = [];

  // for (let i = 0; i < users.length; i++){
  //   liUsers.push(`${users[i]}`)
  // }

  Kullanicilar.forEach((item, index) =>
    liUsers.push(<li key={index}>{item}</li>)
  );

  // const liUsersMap = users
  //   .filter((user) => user != 'Giray')
  //   .map((user, index) => <li key={index}>{user}</li>);

  const [counter, setCounter] = useState(0);

  const counterHandler = (event) => {
    const name = event.target.name;

    // kosul ? true : false
    // kosul && true..

    // name === 'increase'
    //   ? setCounter(counter + 1)
    //   : counter >= 1
    //   ? setCounter(counter - 1)
    //   : null;

    name === 'increase'
      ? setCounter(counter + 1)
      : !!counter && setCounter(counter - 1);

    // if (name === 'increase') {
    //   setCounter(counter + 1);
    // } else if (counter >= 1) {
    //   setCounter(counter - 1);
    // }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>{counter}</h1>
        <button
          className="btn btn-primary w-100"
          name="increase"
          onClick={counterHandler}
        >
          +
        </button>

        <button
          className="btn btn-danger"
          name="decrease"
          onClick={counterHandler}
        >
          -
        </button>

        {/*        
      <ul>{liUsers}</ul>
      <hr />
      <ul>{liUsersMap}</ul>
      
      
    */}
        {!!counter && (
          <>
            <hr />
            <ul>
              {[...Array(counter)].map((item, index) => (
                <li key={index}>{index + 1}</li>
              ))}
            </ul>
            <hr />
          </>
        )}

        <GisUsers />
      </div>
    </div>
  );
}
