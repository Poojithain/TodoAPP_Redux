// import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

 function TodoList() {
    const todos=useSelector((state)=>state.todos)
    console.log(todos)
  return (
    <ul>
      {
       todos. map((todo)=>(<Todo key={todo.id} id={todo.id} title={todo.title}/>))
      }
    </ul>
  )
}
export default TodoList;
