import React from "react";

const FunctionsIntro = () => {
  function square(num) {
    return num ** 2;
  }

  function cube(num) {
    return num ** 3;
  }

  const getDigitsSum = (num) => {
    return num.split("").reduce((sum, digit) => sum + parseInt(digit), 0);
  };

  const sum = square(3) + cube(4);
  const sum123 = getDigitsSum("123");

  return (
    <div className="demo-results">
      <span>{sum}</span>
      <span>{`сумма цифр в числе 123 = ${sum123}`}</span>
    </div>
  );
};

export default FunctionsIntro;
