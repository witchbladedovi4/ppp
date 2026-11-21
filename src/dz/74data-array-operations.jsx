import React, { useState } from "react";

const DataArrayOperations = () => {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  function doSmth(index) {
    setNotes(notes.map((note, i) => (i === index ? note * note : note)));
  }

  const handleClick = (text, index) => {
    setInputValue(text);
    setActiveIndex(index);
  };

  const handleBlur = () => {
    if (activeIndex !== null) {
      setNotes(
        notes.map((note, i) => (i === activeIndex ? inputValue : note))
      );
      setActiveIndex(null);
    }
  };

  const reverseArr = () => {
    setNotes([...notes].reverse());
  };

  const result = notes.map((note, index) => {
    return (
      <li key={index} onClick={() => handleClick(note, index)}>
        <span className="data-row-value">{note}</span>
        <span className="data-row-actions">
          <button
            className="btn btn-icon btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              doSmth(index);
            }}
          >
            **2
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
            }}
          >
            del
          </button>
        </span>
      </li>
    );
  });

  return (
    <div className="data-lab">
      <ul className="data-list data-actions-list">{result}</ul>

      <div className="data-form-row">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleBlur}
        />
        <button className="btn btn-secondary" onClick={reverseArr}>
          Reverse
        </button>
      </div>
    </div>
  );
};

export default DataArrayOperations;
