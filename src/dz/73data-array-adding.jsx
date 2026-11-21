import { useState } from "react";

const DataArrayAdding = () => {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState("");

  const result = notes.map((note, index) => {
    return <li key={index}>{note}</li>;
  });
  let lastNum = notes.length > 0 ? notes[notes.length - 1] : 0;

  return (
    <div className="data-lab">
      <ul className="data-list">{result}</ul>

      <div className="data-toolbar">
        <button
          className="btn btn-primary"
          onClick={() => {
            setNotes([...notes, lastNum + 1]);
          }}
        >
          Добавить элемент в массив
        </button>
      </div>

      <div className="data-form-row">
        <input
          placeholder="Елемент"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="btn btn-secondary"
          onClick={() => {
            if (inputValue.trim() === "") return;
            setNotes([...notes, inputValue]);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default DataArrayAdding;
