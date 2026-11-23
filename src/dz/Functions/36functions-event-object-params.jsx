import React from "react";

const FunctionsEventObjectParams = () => {
  function func(arg, event, arg2) {
    console.log(arg, event, arg2);
  }

  return (
    <div>
      <button onClick={(event) => func("eee", event, "aaa")}>act</button>
    </div>
  );
};

export default FunctionsEventObjectParams;
