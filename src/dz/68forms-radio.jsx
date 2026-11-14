import React, { useState } from "react";

const FormsRadio = () => {
  const options = [
    { id: "js", value: "1", label: "JS", message: "Вы выбрали JavaScript" },
    { id: "python", value: "2", label: "Python", message: "Вы выбрали Python" },
    {
      id: "minecraft",
      value: "3",
      label: "Minecraft",
      message: "Вы выбрали Minecraft",
    },
  ];

  const [value, setValue] = useState("");

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div>
      {options.map((option) => (
        <React.Fragment key={option.id}>
          <input
            type="radio"
            name="radio"
            id={option.id}
            value={option.value}
            checked={value === option.value}
            onChange={changeHandler}
          />
          <label htmlFor={option.id}>{option.label}</label>
          <br />
        </React.Fragment>
      ))}

      <p>
        {!value && "Сделайте выбор"}
        {value === '1' && `${selectedOption.message} и вы большой молодец`}
        {value && value !== '1' && selectedOption.message}
      </p>
    </div>
  );
};

export default FormsRadio;
