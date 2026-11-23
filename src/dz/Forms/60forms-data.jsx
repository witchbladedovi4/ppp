import React, { useState } from "react";

const FormsData = () => {
  const today = new Date().toLocaleDateString("en-CA");
  return (
    <div>
      <FormsData1 />
      <FormsData2 today={today} />
      <FormsData3 />
      <FormsData4 />
    </div>
  );
};

export default FormsData;

const FormsData1 = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const [result, setResult] = useState(0);

  return (
    <div>
      <h1>Сумма и произведение</h1>
      <input
        type="number"
        value={value1}
        onChange={(e) => setValue1(Number(e.target.value))}
        onBlur={() => setResult("")}
      />
      <input
        type="number"
        value={value2}
        onChange={(e) => setValue2(Number(e.target.value))}
        onBlur={() => setResult("")}
      />
      <button onClick={() => setResult(Number(value1) + Number(value2))}>
        +
      </button>
      <button onClick={() => setResult(Number(value1) * Number(value2))}>
        *
      </button>
      <span>{result}</span>
    </div>
  );
};
const FormsData2 = ({ today }) => {
  const [value1, setValue1] = useState(today);
  const [value2, setValue2] = useState(today);
  const [result, setResult] = useState("");

  const calculateDifference = () => {
    if (!value1 || !value2) {
      setResult("Введите оба числа");
      return;
    }
    const d1 = new Date(value1);
    const d2 = new Date(value2);
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
      setResult("Введите корректные даты (нужен ГГГГ-ММ-ДД)");
      return;
    }
    const difference = Math.abs(d2 - d1);
    const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    setResult(`Разница: ${daysDifference} дней`);
  };
  return (
    <div>
      <h1>Разница между датами</h1>
      <input
        type="date"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <input
        type="date"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <button onClick={calculateDifference}>Рассчитать разницу</button>
      <p>{result}</p>
    </div>
  );
};

const FormsData3 = () => {
  const [value, setValue] = useState("");
  const [sum, setSum] = useState("");

  function handleBlur() {
    if (value.trim() === "") {
      setSum("");
      return;
    }

    // Разбиваем строку на символы, оставляем только цифры (на случай минуса или точки) и складываем
    const total = value.split("").reduce((acc, char) => {
      const digit = Number(char);
      return !isNaN(digit) && char.trim() !== "" ? acc + digit : acc;
    }, 0);

    setSum(total);
  }
  return (
    <div>
      <h1>Сумма цифр числа</h1>
      <input
        type="number"
        placeholder="Введите число"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
      />
      <p>{sum !== "" ? `Сумма цифр: ${sum}` : ""}</p>
    </div>
  );
};

const FormsData4 = () => {
  const [value, setValue] = useState("");
  const [product, setProduct] = useState("");

  function handleBlur() {
    const num = Math.abs(Math.floor(Number(value)));

    if (!value.trim() || isNaN(num) || num === 0) {
      setProduct("");
      return;
    }

    let result = 1;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        result *= i;
      }
    }

    setProduct(result);
  }

  return (
    <div>
      <h1>Произведение делителей числа</h1>
      <input
        type="number"
        placeholder="Введите число"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
      />
      <p>{product !== "" ? `Произведение делителей: ${product}` : ""}</p>
    </div>
  );
};
