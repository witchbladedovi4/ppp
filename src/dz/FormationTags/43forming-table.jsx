import React from "react";

const FormingTable = () => {
  const users = [
    { id: 1, name: "user1", surn: "surn1", age: 30 },
    { id: 2, name: "user2", surn: "surn2", age: 31 },
    { id: 3, name: "user3", surn: "surn3", age: 32 },
  ];
  const rows = users.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.surn}</td>
        <td>{item.age}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Возраст</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default FormingTable;
