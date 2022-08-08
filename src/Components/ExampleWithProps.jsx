import React, { memo } from 'react'

const ExampleWithProps = ({name}) => {
    console.log(' rendering ExampleWithProps');
  return (
    <>
        <h2>ExampleWithProps</h2>
        <div>Name: {name}</div>
    </>
  )
}

export default memo(ExampleWithProps);

// memo is a Hoc given  to us by React
// memo always depends on prev props and current props
// prevProps and currentProps

// prevProp = abhinav
// current props  = abhinav

// if(prevprop === currentProp){
//      dont re render
// } else{
//      re render
// }


// comparison
// shallow comparison

let a = 'abhinav'
let b = 'abhinav'

// for all ref types
let obj1 = {
    name: 'abhinav'
}

let obj2 = {
    name: 'abhinav'
}

// console.log(a===b); //true --->compoennt wont rerender

// console.log(obj1 === obj2); //false ---->component will rerender

// because it checks for ref not value
