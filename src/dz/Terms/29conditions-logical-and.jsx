import React from "react";

const ConditionsLogicalAnd = () => {
  const isAuth = true;

  return (
    <div>
      <p>{isAuth ? "Вы авторизованы" : "пожалуйста, авторизуйтесь"}</p>
    </div>
  );
};

export default ConditionsLogicalAnd;
