import React, { useState } from 'react'

const StatesReactivity = () => {
  const [name, setName] = useState('John');
  const [surname, setSurname] = useState('Doe');
	
	return <div>
		<span>{name} </span>
		<span>{surname}</span>
		<button onClick={() => { setName('Nikita'); setSurname('Zverev'); }}>btn</button>
	</div>;
}

export default StatesReactivity