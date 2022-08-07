import React from 'react'
import { useState } from 'react'

export const StateExample = () => {
    const [name, setName] = useState('abhinav')
    console.log('rendering');
  return (
    <>
    <h2>StateExample</h2>
    <div>Name: {name}</div>
    <button onClick={() => setName('abhi')}>Update NAme</button>
    </>
  )
}

// if value is same from the creation phase
// ---> no re render

//  if compoennt went to updating phase then we update the same value
// ----> it render one time ---> for precautionary measurement
