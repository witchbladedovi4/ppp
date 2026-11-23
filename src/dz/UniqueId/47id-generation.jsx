import { nanoid } from "nanoid/non-secure";
import uuid from "react-uuid";

const IdGeneration = () => {
  const array = ["one", "two", "three"];

  return (
    <div>
      <h3>nanoid</h3>
      <Nanoid array={array} />
      <h3>uuid</h3>
      <UuidArray array={array} />
    </div>
  );
};

const UuidArray = ({array}) => {
  const uuidArray = array.map((item) => {
    return {
      id: uuid(),
      value: item,
    };
  });
  return (
    <ul>
      {uuidArray.map((item) => (
        <li key={item.id}>
          {" "}
          {item.value} - {item.id}{" "}
        </li>
      ))}
    </ul>
  );
};

const Nanoid = ({array}) => {
  const nanoidArray = array.map((item) => {
    return {
      id: nanoid(),
      value: item,
    };
  });
  return (
    <ul>
      {nanoidArray.map((item) => (
        <li key={item.id}>
          {" "}
          {item.value} - {item.id}{" "}
        </li>
      ))}
    </ul>
  );
};
export default IdGeneration;
