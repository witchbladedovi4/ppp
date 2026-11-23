import React from 'react'

const FormingTagsArray = () => {
  const arr = [
		<li key={1}>1</li>,
		<li key={2}>2</li>,
		<li key={3}>3</li>,
		<li key={4}>4</li>,
		<li key={5}>5</li>,
	];
  return (
    <div>
      <ul>
        {arr}
      </ul>
    </div>
  )
}

export default FormingTagsArray