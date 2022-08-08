import React, { memo } from 'react'

const Child = (props) => {
    console.log('redering Child');
  return (
    <>
    <div>Child</div>
    <div>Name: {props.user.name}</div>
    <div>role: {props.user.role}</div>
    </>
  )
}

export default memo(Child);
