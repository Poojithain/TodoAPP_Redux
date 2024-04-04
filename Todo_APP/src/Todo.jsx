import  { useState } from 'react';
import { editTodo,delTodo } from './Actions';
import { useDispatch } from 'react-redux';
import './Todo.css';

// eslint-disable-next-line react/prop-types
function Todo({ id, title }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title); 
  const dispatch = useDispatch(); // Added parentheses to call useDispatch

  function handleTodo() {
    if (newTitle.trim()) {
      dispatch(editTodo({ id: id, title: newTitle }));
      setEditing(false);
    }
  }
  function handleDel(){
    dispatch(delTodo({id:id}))
  }

  return (
    <div className={`todo ${editing ? 'editing' : ''}`}>
    {editing ? (
      <div>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <button onClick={handleTodo}>Save</button>
      </div>
    ) : (
      <li>
        <p>{title}</p>
        <div className="todo-actions">
          <button className="edit" onClick={() => setEditing(true)}>Edit</button>
          <button className="delete" onClick={handleDel}>DELETE</button>
        </div>
      </li>
    )}
  </div>
);
}

export default Todo;
