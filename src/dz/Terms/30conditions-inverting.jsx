import React from 'react'

const ConditionsInverting = () => {
  const isAuth = false;

  return (
    <div>
      <p>{isAuth ? "Вы авторизованы" : "пожалуйста, авторизуйтесь"}</p>
    </div>
  );
}

export default ConditionsInverting