import React from 'react'

function TodoInput(props) {
   

  return (

    <div>
        <input value={props.input} onChange={props.Handleinput} placeholder="enter your task"/> 
        <button onClick ={props.Handlesubmit}>+</button>
    </div>
  )
}

export default TodoInput