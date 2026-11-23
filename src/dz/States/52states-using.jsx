import React, { useState } from 'react'

const StatesUsing = () => {
  const [name] = useState('John');
  const [surname] = useState('Doe');
  const [age] = useState(30);
  return (
    <div>
      <span>{name}</span>
      <span>{surname}</span>
      <span>{age}</span>
    </div>
  )
}

export default StatesUsing