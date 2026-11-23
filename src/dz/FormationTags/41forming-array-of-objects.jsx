import React from 'react'

const FormingArrayOfObjects = () => {
  const users = [
	{id: 1, name: 'user1', surn: 'surn1', age: 30},
	{id: 2, name: 'user2', surn: 'surn2', age: 31},
	{id: 3, name: 'user3', surn: 'surn3', age: 32},
];
  const res = users.map((item) => {
		return <p key={item.id}>
			<li>{item.name}</li>:
			<li>{item.surn}</li>:
			<li>{item.age}</li>
		</p>;
	});
	
	return <ul>
		{res}
	</ul>;
}

export default FormingArrayOfObjects