import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Example1  from './Example1'
import  ExampleWithProps from './ExampleWithProps';

export const ParentExample = () => {
    const [count, setCount] = useState(0);
    const [userInfo, setName] = useState({
        user: 'abhinav',
        role: 'Instructor'
    })
    console.log('rendering ParentExample');

    useEffect(() => {
        console.log('count updated');
    }, [count])

    useEffect(() => {
        console.log('userInfo updated');
    }, [userInfo])

    console.log('');

  return (
   <>
    <h2>ParentExample</h2>
    <div>Count: {count}</div>
    <div>User: {userInfo.user}</div>
    <button onClick={() => setCount(count+1)}>increase</button>
    <button onClick={() => setName({...userInfo, user: 'abhi'})}>update user</button>
    
    {/* <Example1/> */}
    <ExampleWithProps name={userInfo.user}/>
   </>
  )
}
