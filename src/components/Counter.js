import React, { useState } from 'react'

const Counter = () => {
    const [count1 ,setCount1] = useState(0);
    const [count2 , setCount2] = useState(1);

  return (
    <div>
      <button  className='bg-blue-500 py-2 px-8 text-white rounded'>count1: {count1}</button>
      <div>
      <button className='bg-blue-500 py-2 px-8 text-white rounded'>count1: {count2}</button>
      </div>
    </div>
  )
}

export default Counter
