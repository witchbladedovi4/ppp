import React, { useState } from "react";

const FormsInputFunction = () => {
  return (
    <div>
      <FormsInputFunction1 />
      <FormsInputFunction2 />
    </div>
  );
};
const FormsInputFunction1 = () => {
  const [age, setAge] = useState("");
  const currentYear = new Date().getFullYear();
  const birthYear =
    age.trim() !== "" && !isNaN(age) && Number(age) > 0
      ? currentYear - Number(age)
      : "";
      const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Введите год рождения"
        onChange={(e) => handleChange(e)}
        value={age}
      />
      <span>
        {birthYear ? `Вы родились: ${birthYear}` : "Введите год рождения"}
      </span>
    </div>
  );
};
const FormsInputFunction2 = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const newValue = value.trim() !== "" && !isNaN(value) ? ((Number(value) - 32)) * 5 / 9 : "";
  return (
    <div>
      <input
        type="number"
        placeholder="Фаренгейта "
        onChange={(e) => handleChange(e)}
        value={value}
      />
      <span>Цельсия = {Math.round(newValue * 100) / 100}</span>
    </div>
  );
}
export default FormsInputFunction;
