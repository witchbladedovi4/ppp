import React, { useState } from "react";

const StatesBooleanValue = () => {
  const [isBanned, setIsBanned] = useState(false);
  return (
    <div>
      <span>Nikita {isBanned ? "В бане" : "Онлайн"}</span>
      <button onClick={() => setIsBanned(!isBanned)}>
        {isBanned ? "Разбанить" : "Забанить"}
      </button>
    </div>
  );
};

export default StatesBooleanValue;
