import { useState } from "react";

const FormsDefaultValues = () => {
  const [value] = useState("вова9mine");
  const [checked] = useState(true);

  return <div>
    		<input defaultValue={value} />
		<input type="checkbox" defaultChecked={checked} />

  </div>;
};

export default FormsDefaultValues;
