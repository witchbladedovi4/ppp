import { useState } from "react";

const SelectArray = () => {
  const texts = ["Выберите город","Екатеринбург", "Moscow", "Абубааби", "Таганрог"];
  const [value, setValue] = useState("");
  const photo = "https://i.pinimg.com/originals/64/2f/75/642f757d7ff814c5ebef2c1f68ddf1b9.jpg"
  const options = texts.map((text, index) => {
    if (index === 0) {
      return (
        <option key={index} value='' disabled>
          {text}
        </option>
      )
    }
    return <option key={index}>{text}</option>;
  });
  return (
    <>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        {options}
      </select>
      <p>ваш выбор: {value ? value : "Не выбрано"}</p>
      <img src={photo} alt='smolensk'/>
    </>
  );
};

export default SelectArray;
