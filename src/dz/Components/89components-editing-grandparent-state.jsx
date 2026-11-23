import React, { useState } from 'react'
import { id } from '../../utils/id';
import { BanUser88 } from '../../utils/UserComponent';

const usersArr = [
  { id: id(), name: "Nikita", surn: "Zverev", isEdit: false },
  { id: id(), name: "Elya", surn: "Plug", isEdit: false },
  { id: id(), name: "Vova", surn: "9Mine", isEdit: false },
];
const ComponentsEditingGrandparentState = () => {
  const [users, setUser] = useState(usersArr);
    const toggleMode = (id) => {
      setUser(
        users.map((user) =>
          user.id === id ? { ...user, isEdit: !user.isEdit } : user,
        ),
      );
    };
    const editUser = (id, field, e) => {
      setUser(
        users.map((user) =>
          user.id === id ? { ...user, [field]: e.target.value } : user,
        ),
      );
    };
    const items = users.map((user) => {
      return (
        <BanUser88
          key={user.id}
          {...user}
          toggleMode={toggleMode}
          editUser={editUser}
        />
      );
    });
    return <>{items}</>;
  };

export default ComponentsEditingGrandparentState