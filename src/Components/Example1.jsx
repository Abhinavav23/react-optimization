import React, { memo } from 'react'

const Example1 = () => {
  console.log('rendering Example1');
  return (
    <>
        <h2 className='test'>Example1</h2>
    </>
  )
}

export default memo(Example1)
// undefined
// undefined 



// React.createElement('div', {className: 'test'}, reac)
// memo is an HOC
