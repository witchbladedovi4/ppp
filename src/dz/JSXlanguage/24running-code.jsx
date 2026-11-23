const RunningCode = () => {
  const num1 = 3;
  const num2 = 4;
  const name = "John";
  const surname = "Doe";
  return (
    <div className="demo-results">
      <span>result: {num1 + num2}</span>
      <span>name: {name + " " + surname}</span>
      <span>result: {Math.round(Math.sqrt(num2))}</span>
    </div>
  );
};

export default RunningCode;
