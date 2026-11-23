const RunningCode = () => {
  const num1 = 3;
  const num2 = 4;
  const name = "John";
  const surname = "Doe";
  return (
    <div>
      result:{num1 + num2}
      name:{name + " " + surname}
      result:{Math.round(Math.sqrt(num2))}
    </div>
  );
};

export default RunningCode;
