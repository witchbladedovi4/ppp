import { useState } from "react";

const DataObjectsArrayOperations = () => {
  const initNotes = [
    {
      id: "GYi9G_uC4gBF1e2SixDvu",
      prop1: "value11",
      prop2: "value12",
      prop3: "value13",
    },
    {
      id: "IWSpfBPSV3SXgRF87uO74",
      prop1: "value21",
      prop2: "value22",
      prop3: "value23",
    },
    {
      id: "JAmjRlfQT8rLTm5tG2m1L",
      prop1: "value31",
      prop2: "value32",
      prop3: "value33",
    },
  ];
  const [notes, setNotes] = useState(initNotes);
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
  });
  const [activeId, setActiveId] = useState(null);

  const handleDel = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  const handleEditClick = (note) => {
    setFormData({
      field1: note.prop1,
      field2: note.prop2,
      field3: note.prop3,
    });
    setActiveId(note.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    if (!activeId) return;
    setNotes(
      notes.map((item) => {
        if (item.id === activeId) {
          return {
            ...item,
            prop1: formData.field1,
            prop2: formData.field2,
            prop3: formData.field3,
          };
        }
        return item;
      })
    );
  };

  const result = notes.map((note) => {
    return (
      <li
        key={note.id}
        className={`data-object-row${
          activeId === note.id ? " is-editing" : ""
        }`}
      >
        <span className="data-field">{note.prop1}</span>
        <span className="data-field">{note.prop2}</span>
        <span className="data-field">{note.prop3}</span>
        <span className="data-row-actions">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDel(note.id)}
          >
            Del
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => handleEditClick(note)}
          >
            Input
          </button>
        </span>
      </li>
    );
  });

  return (
    <div className="data-lab">
      <ul className="data-list data-object-list">{result}</ul>

      <div className="data-form-row data-form-fields">
        <input
          type="text"
          value={formData.field1}
          name="field1"
          onChange={handleInputChange}
        />
        <input
          type="text"
          value={formData.field2}
          name="field2"
          onChange={handleInputChange}
        />
        <input
          type="text"
          value={formData.field3}
          name="field3"
          onChange={handleInputChange}
        />
      </div>

      <div className="data-toolbar">
        <button className="btn btn-primary" onClick={handleSaveClick}>
          Сохранить изменения
        </button>
      </div>
    </div>
  );
};

export default DataObjectsArrayOperations;
