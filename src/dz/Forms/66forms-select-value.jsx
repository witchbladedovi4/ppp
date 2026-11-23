import React, { useState } from 'react'

const FormsSelectValue = () => {
  	const [value, setValue] = useState('');

  return (
    <div>
      <select value={value} onChange={event => setValue(event.target.value)}>
			<option value="" disabled>Выберите возрастну группу</option>
			<option value="1">0 лет</option>
			<option value="1">1 лет</option>
			<option value="1">2 лет</option>
			<option value="1">3 лет</option>
			<option value="1">4 лет</option>
			<option value="1">5 лет</option>
			<option value="1">6 лет</option>
			<option value="1">7 лет</option>
			<option value="1">8 лет</option>
			<option value="1">9 лет</option>
			<option value="1">10 лет</option>
			<option value="1">11 лет</option>
			<option value="1">12 лет</option>
			<option value="2">13 лет</option>
			<option value="2">14 лет</option>
			<option value="2">15 лет</option>
			<option value="2">16 лет</option>
			<option value="2">17 лет</option>
			<option value="3">18 лет</option>
			<option value="3">19 лет</option>
			<option value="3">20 лет</option>
			<option value="3">21 лет</option>
			<option value="3">22 лет</option>
			<option value="3">23 лет</option>
			<option value="3">24 лет</option>
			<option value="4">Больше 25 лет</option>
		</select>
		<p>
      {value === "" && 'Выбирети возрст'}
			{value === '1' && 'Вам от 0 до 12 лет'}
			{value === '2' && 'Вам от 13 до 17'}
			{value === '3' && 'Вам от 18 до 25,'}
			{value === '4' && (
        <>
      Вы стрый
      <img src="https://images.meme-arsenal.com/03ffa23c7268fe7082b7f8a368d38ef7.jpg"
      alt='ded'/>
        </>
      )}
		</p>
    </div>
  )
}

export default FormsSelectValue