import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import ChildCallback from './ChildCallback'

export const ParentCallBack = () => {

    const [count, setCount] = useState(0);

    // usecallback memoizes the whole function but 
    // useMemo memoizes the return value from the function
    const increase = useCallback((number) => {
        setCount(count+number);
    }, [])

    console.log('rendering ParentCallBack comp');
    
  return (
    <>
        <h2>ParentCallBack</h2>
        <div>count: {count}</div>
        <ChildCallback incrementCount={increase}/>
    </>
  )
}
