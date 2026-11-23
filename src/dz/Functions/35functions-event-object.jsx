import React from 'react'

const FunctionsEventObject = () => {
  function func(event) {
		console.log(event); // объект с событием
	}
  const func2 = (event) => {
    console.log(event.target); 
  }
	
	return <div>
		<button onClick={func}>act</button>
		<button onClick={func2}>act2</button>
	</div>;
}

export default FunctionsEventObject