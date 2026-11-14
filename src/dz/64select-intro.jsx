import { useState } from 'react';

const SelectIntro = () => {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div>
      <select value={value} onChange={handleChange} required>
        <option value="" selected disabled>Выберите город</option>
        <option>Екатеринбург</option>
        <option>Москва</option>
        <option>будаби</option>
        <option>Самара</option>
      </select>
      <p>ваш выбор: {value ? value : 'не выбрано'}</p>
    </div>
  );
};

export default SelectIntro;
