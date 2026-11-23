import { useState } from "react";

const ConditionsReturn = () => {
  let text;
	const [isAdmin, setIsAdmin] = useState(true);
	
	if (isAdmin) {
		text = <p>u Admin</p>;
	} else {
		text = <p>unt Admin</p>;
	}
	
	return <>
  {text}
  <button onClick={() => {setIsAdmin(!isAdmin)}}>Adminmmode</button>
  </>
}

export default ConditionsReturn