import React from 'react'

const FunctionsHandlersParams = () => {
  const show1 = () => {
    alert(1);
  }
  const show2 = () => {
    alert(2);
  }
  const show3 = () => {
    alert(3);
  }
  return <div>
		<button onClick={show1}>act1</button>
		<button onClick={show2}>act2</button>
		<button onClick={show3}>act3</button>
	</div>;
}

export default FunctionsHandlersParams