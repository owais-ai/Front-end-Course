import React from 'react'

interface student {
    name:string,
    age:number,
    class:number
}
const ChildComponent = (props:student) => {
  return (
    <div className='m-5 my-20'>
        <h1 className='text-center text-red-500'>Hello {props.name}</h1>
        <p className='text-center text-green-600'>Your age is {props.age}</p>
        <p className='text-center text-blue-600'>You study in class{props.class}</p>
    </div>
  )
}

export default ChildComponent