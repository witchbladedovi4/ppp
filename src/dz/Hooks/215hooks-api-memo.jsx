import { memo, useCallback, useState } from "react";

const Increment = memo(({ value1, hancleIncrement }) => {
  console.warn("increment");
  return (
    <p className="memo-row">
      <button onClick={hancleIncrement}>Increment: {value1}</button>
    </p>
  );
});

const Dencrement = memo(({ value, setValue }) => {
  console.error("decrement");
  return (
    <p className="memo-row">
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        Dencrement: {value}
      </button>
    </p>
  );
});

const HooksApiMemo = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const hancleIncrement = useCallback(() => {
    setValue1((prev) => prev + 1);
  }, []);

  return (
    <div className="memo-demo">
      <Increment value1={value1} hancleIncrement={hancleIncrement} />
      <Dencrement value={value} setValue={setValue} />
    </div>
  );
};

export default HooksApiMemo;
