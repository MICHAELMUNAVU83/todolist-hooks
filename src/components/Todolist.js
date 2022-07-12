import React from "react";

function Todolist(props) {
  return (
    <div>
      {props.todos.map((todo) => (
        <div className= "span-todo" key={todo.id}>
          <h3 >{todo.task}</h3> <button onClick ={()=>{props.Deletetask(todo.id)}}>DEl</button>
        </div>
      ))}
    </div>
  );
}

export default Todolist;
