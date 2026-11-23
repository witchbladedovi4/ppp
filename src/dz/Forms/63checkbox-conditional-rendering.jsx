import { useState } from "react";

const CheckboxConditionalRendering = () => {
  const [checked, setChecked] = useState(true);
  const [checked1, setChecked1] = useState(true);
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div>
        {checked ? (
          <>
            <h2>Ура, вам уже есть 18</h2>
            <p>здесь расположен контент только для взрослых</p>
          </>
        ) : (
          <p>увы, вам еще нет 18 лет:(</p>
        )}
      </div>
      <input
        type="checkbox"
        checked={checked1}
        onChange={() => setChecked1(!checked1)}
      />
      {checked1 ? <p>Меня видно ^_^?</p>  : ''}
    </div>
  );
};

export default CheckboxConditionalRendering;
