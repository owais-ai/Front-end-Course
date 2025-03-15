import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <div>
        <ChildComponent name= "Owais" age={30} class={10}/>
        <ChildComponent name="Abdul Malik" age={23} class={12}/>
        <ChildComponent name="Maham Rana" age={15} class={11}/>
    </div>
  )
}

export default ParentComponent