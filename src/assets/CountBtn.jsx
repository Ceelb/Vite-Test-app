import { useState } from 'react'
import React from 'react'

const CountBtn = () => {
  const [count, setCount] = useState(0)

  return (
  <div>
        <button className='countBtn' onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
    </div>
  )
}

export default CountBtn
