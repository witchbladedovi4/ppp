import React from 'react'
import { id } from '../../utils/id';

const ComponentsPassingId = () => {
  const users = [
      { id: id(), name: "user1", surn: "surn1", age: 30 },
      { id: id(), name: "user2", surn: "surn2", age: 31 },
      { id: id(), name: "user3", surn: "surn3", age: 32 },
    ];
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Возраст</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user.id} {...user} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };

const User = ({ id ,name, surn, age }) => {
  return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{surn}</td>
        <td>{age}</td>
      </tr>
   
  );
};

export default ComponentsPassingId