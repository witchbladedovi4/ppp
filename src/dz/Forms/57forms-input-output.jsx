import { useState } from "react";

const FormsInputOutput = () => {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }
  const lengthWithoutSpaces = value.replace(/\s+/g, "").length;
  return (
    <div>
      <input value={value} onChange={handleChange} />
      <p>кол-во символов: {lengthWithoutSpaces}</p>
    </div>
  );
};

export default FormsInputOutput;
