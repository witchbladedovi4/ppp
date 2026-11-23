import React from 'react'
import { id } from '../../utils/id';

const IdFunctionUsing = () => {
  
  const prods = [
	{id: id(), name: 'product1', cost: 100},
	{id: id(), name: 'product2', cost: 200},
	{id: id(), name: 'product3', cost: 300},
];
  return (
    <div>
      {prods.map((item) => (
        <p key={item.id}>
          <span>{item.name}</span>: <span>{item.cost}</span> id: <span>{item.id}</span>
        </p>
      ))}
    </div>
  )
}

export default IdFunctionUsing