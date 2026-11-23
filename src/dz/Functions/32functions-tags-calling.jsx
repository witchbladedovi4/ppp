import React from 'react'

const FunctionsTagsCalling = () => {
  const getDigitsSum = (num) => {
    return num.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  
  const sum12345 = getDigitsSum('12345');

  return (
    <div>
      {`сумма цифр в числе 12345 = ${sum12345}`}
    </div>
  )
}

export default FunctionsTagsCalling