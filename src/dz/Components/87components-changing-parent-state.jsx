import React, { useState } from 'react'
import { id } from '../../utils/id';
import { BanUser } from '../../utils/UserComponent';

const ComponentsChangingParentState = () => {
  const usersArr = [
	{id: id(), name: 'Nikita', surn: 'Zverev', isBan: false, salary: 120000},
	{id: id(), name: 'Elya', surn: 'Plug', isBan: false, salary: 240000},
	{id: id(), name: 'Vova', surn: '9Mine', isBan: false, salary: 30000},
];
  const [users, setUser] = useState(usersArr);
  const toBanUser=(id) => {
    setUser(users.map(user => {
      if(user.id === id) {
        user.isBan = !user.isBan;
      }
      return user
    }))
  }
  const items = users.map(user => {
    return <BanUser 
    key={user.id}
    {... user}
    toBanUser={toBanUser}
    />
  })
  
  return (
    <div>{items}</div>
  )
}

export default ComponentsChangingParentState