import { useState } from "react";

const DataObjectsArrayAdding = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddClick = () => {
    const newNote = {
      id: Date.now().toString(),
      prop1: formData.field1,
      prop2: formData.field2,
      prop3: formData.field3,
    };
    setNotes([...notes, newNote]);

    setFormData({
      field1: "",
      field2: "",
      field3: "",
    });
  };

  const result = notes.map((note) => {
    return (
      <li key={note.id} className="data-object-row">
        <span className="data-field">{note.prop1}</span>
        <span className="data-field">{note.prop2}</span>
        <span className="data-field">{note.prop3}</span>
      </li>
    );
  });

  return (
    <div className="data-lab">
      <div className="data-toolbar">
        <button className="btn btn-primary" onClick={handleAddClick}>
          Добавить
        </button>
      </div>

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
    </div>
  );
};

export default DataObjectsArrayAdding;
