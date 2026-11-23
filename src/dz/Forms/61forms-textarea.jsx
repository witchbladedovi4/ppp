import { useState } from "react";
import { translitMap } from "../../utils/translitMap";
const FormsTextarea = () => {
  return (
    <div>
      <FormsTextarea1 />
      <FormsTextarea2 />
    </div>
  );
};

const FormsTextarea1 = () => {
  const [text, setText] = useState("");
  function toTranslit(text) {
    return text
      .split("")
      .map((char) => (char in translitMap ? translitMap[char] : char))
      .join("");
  }

  return (
    <div>
      <textarea
        rows={5}
        cols={40}
        placeholder="Введите текст на русском..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{toTranslit(text)}</p>
    </div>
  );
};

const FormsTextarea2 = () => {
  const [text, setText] = useState("");
  const sum = text.split("\n").reduce((acc, line) => {
    const num = Number(line.trim());
    return !isNaN(num) && line.trim() !== "" ? acc + num : acc;
  }, 0);

  return (
    <div>
      <textarea
        rows={6}
        cols={30}
        placeholder="Вводите числа, каждое с новой строки..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Сумма: {sum}</p>
    </div>
  );
};
export default FormsTextarea;
