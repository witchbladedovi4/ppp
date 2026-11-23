import React, { useState } from "react";

const ConditionsTernary = () => {
  const [age, setAge] = useState(18);

  return (
    <div>
      {age >= 18 ? "Совершеннолетний" : "Вы несовершеннолетний!"}<br/>
      input:{" "}
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
    </div>
  );
};

export default ConditionsTernary;
