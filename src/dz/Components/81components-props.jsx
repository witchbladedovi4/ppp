import { Employee } from "../../utils/UserComponent";

const ComponentsProps = () => {
  return (
    <div>
      <Employee name={"Nikita"} surname={"Zverev"} salary={120000} />
      <Employee name={"Elya"} surname={"Plug"} salary={300000} />
      <Employee name={"Вова"} surname={"9mine"} salary={4000} />
    </div>
  );
};

export default ComponentsProps;
