import  { useState } from 'react'

const FormsObjectInputsBinding = () => {
 const initDate = {
	year:  2025,
	month: 12,
	day:   31,
}
  const [obj, setObj] = useState(initDate);
	function handleChange(prop, event) {
		setObj({...obj, ...{[prop]: event.target.value}});
	}
	const getDayOfWeek = () => {
    const y = Number(obj.year);
    const m = Number(obj.month);
    const d = Number(obj.day);

    if (!y || !m || !d) return "веведите дату"

    const date = new Date(y, m - 1, d);
    if (
      date.getFullYear() !== y ||
      date.getMonth() !== m - 1 ||
      date.getDate() !== d
    ) {
      return "некорект дата"
    }
    return date.toLocaleDateString('ru-RU', {weekday: 'long'})
  }
	return <div>
		<input value={obj.year} onChange={event => handleChange('year', event)} />
		<input value={obj.month} onChange={event => handleChange('month', event)} />
		<input value={obj.day} onChange={event => handleChange('day', event)} />
		
		<br />
		{obj.year}г-{obj.month}мес-{obj.day}день
		<br />
    <span>День недели: {getDayOfWeek()}</span>
	</div>
  
}

export default FormsObjectInputsBinding