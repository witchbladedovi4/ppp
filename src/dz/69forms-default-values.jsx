import { useState } from "react";

const FormsDefaultValues = () => {
  const [value, setValue] = useState("вова9mine");
  const [checked, setChecked] = useState(true);

  return <div>
    		<input defaultValue={value} />
		<input type="checkbox" defaultChecked={checked} />

  </div>;
};

export default FormsDefaultValues;
