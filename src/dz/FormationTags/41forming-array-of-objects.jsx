import React from "react";

const FormingArrayOfObjects = () => {
  const users = [
    { id: 1, name: "user1", surn: "surn1", age: 30 },
    { id: 2, name: "user2", surn: "surn2", age: 31 },
    { id: 3, name: "user3", surn: "surn3", age: 32 },
  ];

  const res = users.map((item) => {
    return (
      <li key={item.id} className="data-object-row">
        <span className="data-field">{item.name}</span>
        <span className="data-field">{item.surn}</span>
        <span className="data-field">{item.age}</span>
      </li>
    );
  });

  return <ul className="data-list data-object-list">{res}</ul>;
};

export default FormingArrayOfObjects;
