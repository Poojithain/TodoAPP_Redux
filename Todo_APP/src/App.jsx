import  { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from './Actions'
import TodoList from './TodoList'

export default function App() {
  const dispatch= useDispatch()
  const [todoTitle, setTodoTitle]=useState('')
  const handleTodo = () => {
    if (todoTitle.trim()) {
        const newTodo = {
            title: todoTitle
        };
        dispatch(addTodo(newTodo));
        setTodoTitle(""); 
    }
};
  return (
    <div>
      <h3>This is Todo Application using Redux</h3>
      <div>
        <input type="text" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/>
        <button onClick={()=>handleTodo()}>Add</button>
       
      </div>
      <TodoList/>
    </div>
  )
}
