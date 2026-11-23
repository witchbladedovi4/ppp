import { useState } from "react";

const ConditionsShow = () => {
  let text;
	const show = true;
	// const isAdult = true;
  const [isAdult, setIsAdult] = useState(true);
	if (show) {
		text = <p>text</p>;
	}
	
	return <div>
    {text}
		{isAdult ? <p>You are an adult.</p> : <p>You are not an adult.</p>}
    <button onClick={() => setIsAdult(!isAdult)}>{isAdult ? "true" : "false"}</button>
	</div>;
}

export default ConditionsShow