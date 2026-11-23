import { useState } from "react";

export const UserComponent = () => {
  return (
    <div>
      Я КОМПОНЕНТА ЙОУ О_о
      <span>еще я должна быть в App.jsx, но я пока здесь</span>
    </div>
  );
};

export const Employee = ({ name, surname, salary }) => {
  return (
    <div>{`меня зовут${name} ${surname} я получаю в месяц ${salary}`}</div>
  );
};

export const BanUser = ({ id, name, surn, isBan, salary, toBanUser }) => {
  return (
    <div>
      Имя: <span>{name}</span>, Фамилия: <span>{surn}</span>, Зарпалата:{" "}
      <span>{salary}</span>
      <span>{isBan ? "Забанен" : "Разбанен"}</span>
      <button onClick={() => toBanUser(id)}>
        {isBan ? "Разбанить" : "Забанить"}
      </button>
    </div>
  );
};

export const BanUser88 = ({ id, name, surn, isEdit, toggleMode, editUser }) => {
  return (
    <div>
      Имя:<BanUser88Field 
      id={id}
      text={name}
      type="name"
      isEdit={isEdit}
      editUser={editUser}
      />
      Фамилия:<BanUser88Field 
      id={id}
      text={surn}
      type="surn"
      isEdit={isEdit}
      editUser={editUser}
      />
      <button onClick={() => toggleMode(id)}>
        {isEdit ? "Сохранить" : "Изменить"}
      </button>
    </div>
  );
};
export const BanUser88Field = ({id, text, type, isEdit, editUser}) => {
  return isEdit ? (
    <input value={text} onChange={(e) => editUser(id, type, e)} />
  ) : (
    <span>{text}</span>
  );
};
export const BanUser90Field = ({id, text, type, changeField}) => {
  const [isEdit, setIsEdit] = useState(false)
  return <td>
    {
      isEdit 
      ? <input
      value={text}
      onChange={(event) => changeField(id, type, event)}
      onBlur={() => setIsEdit(false)}
      />
      : <span onClick={() => setIsEdit(true)}>{text}</span>
    }
  </td>
};
export const BanUser90 = ({ id, name, surn, catg, changeField }) => {
  return (
    <tr>
      <BanUser90Field id={id} text={name} type="name" changeField={changeField}/>
      <BanUser90Field id={id} text={surn} type="surn" changeField={changeField}/>
      <BanUser90Field id={id} text={catg} type="catg" changeField={changeField}/>
    </tr>
  );
};

