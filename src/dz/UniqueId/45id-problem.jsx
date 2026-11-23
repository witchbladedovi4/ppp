import React from 'react'

const IdProblem = () => {
  const prods = [
	{id: 1, name: 'product1', cost: 100},
	{id: 2, name: 'product2', cost: 200},
	{id: 3, name: 'product3', cost: 300},
];
  const result = prods.map((item) => {
    return <p key={item.id}>
       id:<span>{item.id}</span> <span>{item.name}</span>: <span>{item.cost}</span>
    </p>;
  });
  return (
    <div>{result}</div>
  )
}

export default IdProblem