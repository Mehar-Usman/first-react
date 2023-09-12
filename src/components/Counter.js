import React, { useState } from 'react'

const Counter = () => {
    const [count1 ,setCount1] = useState(0);
    const [count2 , setCount2] = useState(1);

    function handleClick(){
      setCount1 (count1 + 1)
    }
    function handleClick2(){
      setCount2 (count2 + 1)
    }

  return (
    <div>
      <button onClick={handleClick}  className='bg-blue-500 py-2 px-8 text-white rounded'>count1: {count1}</button>
      <div>
      <button onClick={handleClick2}  className='bg-blue-500 py-2 px-8 text-white rounded'>count2: {count2}</button>
      </div>
    </div>
  )
}

export default Counter; 
