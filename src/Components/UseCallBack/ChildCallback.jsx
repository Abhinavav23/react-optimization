import React, { memo } from 'react'

 const ChildCallback = ({incrementCount}) => {
    console.log('rendering ChildCallback comp');
  return (
    <>
        <div>ChildCallback</div>
        <button onClick={() => incrementCount(5)}>+</button>
    </>
  )
}

export default memo(ChildCallback)