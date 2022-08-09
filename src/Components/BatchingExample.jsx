import React from 'react'
import { useState } from 'react'

export const BatchingExample = () => {
    const [name, setName] = useState('abhi');
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    console.log('rendering BatchingExample');
    const updateAll = () => {
        
        setName('abhinav')
        setCount(10)
        setShow(!show)

        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }
  return (
    <>
    <h2>BatchingExample</h2>
    <div>Name: {name}</div>
    <div>count: {count}</div>
    {show && <div>Show data</div>}
    <button onClick={() => setName('abhinav')}>update Name</button>
    <button onClick={() => setCount(10)}>update count</button>
    <button onClick={() => setShow(!show)}>update show</button>
    <button onClick={updateAll}>update All</button>
    </>
  )
}
