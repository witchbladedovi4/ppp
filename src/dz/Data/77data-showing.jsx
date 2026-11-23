import { useState } from "react";

const DataShowing = () => {
  const initNotes = [
    {
      id: 1,
      name: "name1",
      desc: "long description 1",
      show: false,
    },
    {
      id: 2,
      name: "name2",
      desc: "long description 2",
      show: false,
    },
    {
      id: 3,
      name: "name3",
      desc: "long description 3",
      show: true,
    },
  ];
  const [notes, setNotes] = useState(initNotes);

  const toggleShow = (id) => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) return { ...note, show: !note.show };
        return note;
      })
    );
  };

  const result = notes.map((note) => {
    return (
      <div key={note.id} className="data-card">
        <div className="data-card-top">
          <strong className="data-card-title">{note.name}</strong>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => toggleShow(note.id)}
          >
            {note.show ? "скрыть" : "показать"}
          </button>
        </div>
        <p className="data-card-desc">{note.show ? note.desc : ""}</p>
      </div>
    );
  });

  return <div className="data-lab data-showcase">{result}</div>;
};

export default DataShowing;
