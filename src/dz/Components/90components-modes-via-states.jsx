import React, { useState } from "react";
import { id } from "../../utils/id";
import { BanUser90 } from "../../utils/UserComponent";

const usersArr = [
  { id: id(), name: "Nikita", surn: "Zverev", catg: "Джун" },
  { id: id(), name: "Elya", surn: "Plug", catg: "Мидл" },
  { id: id(), name: "Vova", surn: "9Mine", catg: "Старик" },
];
const ComponentsModesViaStates = () => {
  const [users, setUsers] = useState(usersArr);

  const changeField = (id, field, event) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, [field]: event.target.value } : user,
      ),
    );
  };

  const rows = users.map((user) => {
    return <BanUser90 key={user.id} {...user} changeField={changeField} />;
  });
  return (
    <div>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ComponentsModesViaStates;
