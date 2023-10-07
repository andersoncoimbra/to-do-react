import {useState} from "react";

const Todo = ({todo, remove, complete}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted? "line-through" : ""}}>
        <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
        </div>
        <div>
            <button className="complete" onClick={()=> complete(todo.id)} >Completar</button>
            <button className="remove" onClick={() => remove(todo.id)}>X</button>
        </div>
    </div>
  )
}

export default Todo;