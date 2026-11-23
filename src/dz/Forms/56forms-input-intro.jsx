import { useState } from "react";

const FormsInputIntro = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div className="form-demo">
      <div className="form-demo-row">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <span>Вывод: {value}</span>
      </div>
      <div className="form-demo-row">
        <input value={value2} onChange={(e) => setValue2(e.target.value)} />
        <span>Вывод: {value2}</span>
      </div>
    </div>
  );
};

export default FormsInputIntro;
