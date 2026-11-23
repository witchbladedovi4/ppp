import { useState } from "react";

const CheckboxIntro = () => {
  return (
    <div>
      <CheckboxIntro1 />
      <CheckboxIntro2 />
    </div>
  );
};
const CheckboxIntro1 = () => {
  const [checked, setChecked] = useState(true);
  const [message, setMessage] = useState("");

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <button onClick={() => setMessage(checked ? "Привет" : "Пока")}>
        Toggle
      </button>
      <p>{message}</p>
    </div>
  );
};
const CheckboxIntro2 = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={checked1}
        onChange={() => setChecked1(!checked1)}
      />{" "}
      html
      <input
        type="checkbox"
        checked={checked2}
        onChange={() => setChecked2(!checked2)}
      />{" "}
      css
      <input
        type="checkbox"
        checked={checked3}
        onChange={() => setChecked3(!checked3)}
      />{" "}
      js
      <p>
        Вы выбрали:{" "}
        {checked1 && "html "}
        {checked2 && "css "}
        {checked3 && "js"}
      </p>
    </div>
  );
}
 

export default CheckboxIntro;
